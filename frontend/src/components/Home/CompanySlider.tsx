
import { companies } from "../../utils/mockData";

const CompanySlider = () => {
  // Duplicate the companies array to create a continuous loop effect
  const duplicatedCompanies = [...companies, ...companies];
  
  return (
    <div className="w-full overflow-hidden bg-white py-2 sm:py-3 md:py-4 lg:py-6">
      <div className="relative">
        <div className="flex animate-company-slide">
          {duplicatedCompanies.map((company, index) => (
            <div key={index} className="flex-shrink-0 mx-4 sm:mx-6 md:mx-8 w-10 sm:w-12 md:w-14 lg:w-20 flex items-center justify-center">
              <img 
                src={company.logo} 
                alt={company.name} 
                className="h-8 sm:h-10 md:h-14 lg:h-16 w-auto object-contain transition-transform duration-300 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanySlider;
