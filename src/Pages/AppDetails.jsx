import React from 'react';
import { Link, useParams } from 'react-router';
import useApps from '../Hooks/useApps';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faStar, faThumbsUp } from '@fortawesome/free-solid-svg-icons';


const AppDetails = () => {
  const { id } = useParams();
  const [apps, loading] = useApps();
  const app = apps.find((p) => String(p.id) === id);

  if (loading) return <p>Loading......</p>;
  if (!app) return <p>App not found</p>;

  const { image, title, downloads, ratingAvg, size, reviews, description, companyName } = app || {};

  const handleAddToInstall = () => {


    const existingList = JSON.parse(localStorage.getItem('installation'))
    let updatedList = [];
    if(existingList) {
        updatedList = [...existingList, app]
    }
    else
    {
        updatedList.push(app)
    }

    localStorage.setItem('installation', JSON.stringify(updatedList))
 

  }

  return (
    <div className="max-w-[1000px] mx-auto px-6 py-10 bg-white rounded-2xl shadow-md">
      {/* Top section */}
      <div className="flex flex-col md:flex-row gap-8 items-center border-b border-gray-300 pb-6">
        {/* App icon */}
        <div className="shrink-0">
          <img src={image} alt={title} className="w-40 h-40 object-contain rounded-xl shadow-sm" />
        </div>

        {/* App info */}
        <div className="flex flex-col flex-1 gap-3">
          {/* Title + company */}
          <div>
            <h1 className="text-3xl font-bold text-[#001931]">{title}</h1>
            <p className="text-gray-500">Developed by <span className="font-medium text-gray-700">{companyName}</span></p>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-6 text-gray-700 mt-3">
            <div>
              <FontAwesomeIcon className='text-green-600 text-[20px]' icon={faDownload} />
              <p className="text-sm text-gray-500">Downloads</p>
              <h2 className="text-xl font-semibold text-[#001931]">{downloads}</h2>
            </div>
            <div>
                <FontAwesomeIcon className='text-orange-500 text-[20px]' icon={faStar} />
              <p className="text-sm text-gray-500">Average Ratings</p>
              <h2 className="text-xl font-semibold text-[#001931]">{ratingAvg}</h2>
            </div>
            <div>
                <FontAwesomeIcon className='text-violet-600 text-[20px]' icon={faThumbsUp} />
              <p className="text-sm text-gray-500">Total Reviews</p>
              <h2 className="text-xl font-semibold text-[#001931]">{reviews}</h2>
            </div>
          </div>

          {/* Install button */}
          <div className="mt-4">
            <Link onClick={handleAddToInstall}
              to="/installation"
              className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold px-5 py-2 rounded-md shadow-sm transition duration-200"
            >
              Install Now ({size} MB)
            </Link>
          </div>
        </div>
      </div>

      {/* Ratings section (chart later) */}
      <div className="mt-8">
        <h2 className="text-xl font-bold text-[#001931] mb-3">Ratings</h2>
        {/* Chart placeholder */}
        <div className="h-32 bg-gray-100 rounded-md flex items-center justify-center text-gray-500">
          (Chart coming soon)
        </div>
      </div>

      {/* Description section */}
      <div className="mt-8">
        <h2 className="text-xl font-bold text-[#001931] mb-2">Description</h2>
        <p className="text-gray-700 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
