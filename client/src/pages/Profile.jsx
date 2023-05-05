import React from 'react';
import { DisplayCampaigns } from '../components';
import { useStateContext } from '../context';

const Profile = () => {
  const { address, contract, getUserCampaigns } = useStateContext();
  const [isLoading, setIsLoading] = React.useState(false);
  const [campaigns, setCampaigns] = React.useState([]);

  const fetchCampaigns = async () => {
    setIsLoading(true);
    const data = await getUserCampaigns();
    setCampaigns(data);
    setIsLoading(false);
  }

  React.useEffect(() => {
    if(contract) {
      fetchCampaigns();
    }
  }, [address, contract]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center">
        <div className="mr-4">
          <img
            className="rounded-full h-16 w-16 object-cover"
            src="https://picsum.photos/200"
            alt="Profile"
          />
        </div>
        <div>
          <h2 className="text-xl font-bold text-green-500">Takuya</h2>
          <p className="text-green-100 text-sm">Member since 2021</p>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-lg font-bold mb-4 text-green-100">My Campaigns</h3>
        <DisplayCampaigns
          isLoading={isLoading}
          campaigns={campaigns}
        />
      </div>
    </div>
  );
};

export default Profile
