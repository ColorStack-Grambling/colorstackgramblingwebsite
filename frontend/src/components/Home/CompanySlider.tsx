
import { companies } from "../../utils/mockData";

const CompanySlider = () => {
  // Duplicate the companies array to create a continuous loop effect
  const duplicatedCompanies = [...companies, ...companies];
  
  return (
    <div className="w-full overflow-hidden bg-colorstack-light/50 py-8">
      <div className="container-custom">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-colorstack-black">
          Our Members Have Interned At
        </h2>
      </div>
      
      <div className="relative">
        <div className="flex animate-company-slide">
          {duplicatedCompanies.map((company, index) => (
            <div key={index} className="flex-shrink-0 mx-8 w-32 flex items-center justify-center">
              <img 
                src={company.logo} 
                alt={company.name} 
                className="h-16 object-contain filter grayscale hover:grayscale-0 hover:drop-shadow-md transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanySlider;
