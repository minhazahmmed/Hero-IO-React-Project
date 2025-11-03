import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router';
import useApps from '../Hooks/useApps';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faStar, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';


const AppDetails = () => {
  const { id } = useParams();
  const [apps, loading] = useApps();
  const [isInstalled, setIsInstalled] = useState(false);
  const app = apps.find((p) => String(p.id) === id);


  useEffect(() => {
    const existingList = JSON.parse(localStorage.getItem('installation')) || [];
    const alreadyInstalled = existingList.some((p) => p.id === app?.id);
    setIsInstalled(alreadyInstalled);
  }, [app]);

  if (loading) return <p>Loading......</p>;
  if (!app) return <p>App not found</p>;

  const { image, title, downloads, ratingAvg, size, reviews, description, companyName } = app || {};

  const handleAddToInstall = () => {
    const existingList = JSON.parse(localStorage.getItem('installation')) || [];

   
    const isDuplicate = existingList.some((p) => p.id === app.id);
    if (isDuplicate) return;

    const updatedList = [...existingList, app];
    localStorage.setItem('installation', JSON.stringify(updatedList));
    setIsInstalled(true);

    toast.success(`${title} Installed Successfully!`);
  };

  return (
    <div className="max-w-[1000px] mx-auto px-6 py-10 bg-white rounded-2xl shadow-md">
     
      <div className="flex flex-col md:flex-row gap-8 items-center border-b border-gray-300 pb-6">
     
        <div className="shrink-0">
          <img src={image} alt={title} className="w-40 h-40 object-contain rounded-xl shadow-sm" />
        </div>

     
        <div className="flex flex-col flex-1 gap-3">
          <div>
            <h1 className="text-3xl font-bold text-[#001931]">{title}</h1>
            <p className="text-gray-500">
              Developed by <span className="font-medium text-gray-700">{companyName}</span>
            </p>
          </div>

      
          <div className="flex flex-wrap gap-6 text-gray-700 mt-3">
            <div>
              <FontAwesomeIcon className="text-green-600 text-[20px]" icon={faDownload} />
              <p className="text-sm text-gray-500">Downloads</p>
              <h2 className="text-xl font-semibold text-[#001931]">{downloads}</h2>
            </div>
            <div>
              <FontAwesomeIcon className="text-orange-500 text-[20px]" icon={faStar} />
              <p className="text-sm text-gray-500">Average Ratings</p>
              <h2 className="text-xl font-semibold text-[#001931]">{ratingAvg}</h2>
            </div>
            <div>
              <FontAwesomeIcon className="text-violet-600 text-[20px]" icon={faThumbsUp} />
              <p className="text-sm text-gray-500">Total Reviews</p>
              <h2 className="text-xl font-semibold text-[#001931]">{reviews}</h2>
            </div>
          </div>

      
          <div className="mt-4">
            <button
              onClick={handleAddToInstall}
              disabled={isInstalled}
              className={`inline-block font-semibold px-5 py-2 rounded-md shadow-sm transition duration-200 ${
                isInstalled
                  ? 'bg-gray-400 text-white cursor-not-allowed'
                  : 'bg-green-500 hover:bg-green-600 text-white'
              }`}
            >
              {isInstalled ? 'Installed' : `Install Now (${size} MB)`}
            </button>
          </div>
        </div>
      </div>

    
   <div className="mt-8">
  <h2 className="text-xl font-bold text-[#001931] mb-3">Ratings</h2>

 {/* Responsive Chart */}

  <div className="bg-gray-50 border border-gray-200 rounded-md p-4">
    <ResponsiveContainer width="100%" height={250}>
      <BarChart
        data={app.ratings}
        layout="vertical"
        margin={{ top: 10, right: 30, left: 40, bottom: 10 }}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis type="number" tick={{ fill: '#555' }} />
        <YAxis
          dataKey="name"
          type="category"
          tick={{ fill: '#555' }}
          width={80}
        />
        <Tooltip
          cursor={{ fill: 'rgba(0,0,0,0.05)' }}
          contentStyle={{ backgroundColor: '#fff', borderRadius: '8px' }}
        />
        <Bar dataKey="count" fill="#FFA500" barSize={20} radius={[4, 4, 4, 4]} />
      </BarChart>
    </ResponsiveContainer>
  </div>
</div>


      
      <div className="mt-8">
        <h2 className="text-xl font-bold text-[#001931] mb-2">Description</h2>
        <p className="text-gray-700 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
