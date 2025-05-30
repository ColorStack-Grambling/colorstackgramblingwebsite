
import { companies } from "../../utils/mockData";

const CompanySlider = () => {
  // Duplicate the companies array to create a continuous loop effect
  const duplicatedCompanies = [...companies, ...companies];
  
  return (
    <div className="w-full overflow-hidden bg-white py-4">
      <div className="relative">
        <div className="flex animate-company-slide">
          {duplicatedCompanies.map((company, index) => (
            <div key={index} className="flex-shrink-0 mx-8 w-14 flex items-center justify-center">
              <img 
                src={company.logo} 
                alt={company.name} 
                className="h-14 w-auto object-contain transition-transform duration-300 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanySlider;
