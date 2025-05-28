
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface RegistrationFormProps {
  eventId?: string;
  eventName?: string;
}

const RegistrationForm = ({ eventId, eventName }: RegistrationFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    major: "",
    year: "",
    dietaryRestrictions: "",
    interests: [] as string[],
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const interestOptions = [
    "Software Development",
    "Data Science",
    "Cybersecurity",
    "Machine Learning",
    "Web Development",
    "Mobile App Development",
    "UI/UX Design",
    "Project Management",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (option: string) => {
    const updatedInterests = formData.interests.includes(option)
      ? formData.interests.filter((item) => item !== option)
      : [...formData.interests, option];
    
    setFormData((prev) => ({ ...prev, interests: updatedInterests }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call with timeout
      await new Promise((resolve) => setTimeout(resolve, 800));
      
      console.log("Form submitted:", { eventId, ...formData });
      
      toast({
        title: "Registration successful!",
        description: "You've been registered for the event. Check your email for confirmation.",
        variant: "default",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        major: "",
        year: "",
        dietaryRestrictions: "",
        interests: [],
      });
    } catch (error) {
      toast({
        title: "Registration failed",
        description: "There was an error processing your registration. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {eventName && (
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold">Register for: {eventName}</h2>
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-colorstack-purple focus:outline-none focus:ring-1 focus:ring-colorstack-purple"
              placeholder="John Doe"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-colorstack-purple focus:outline-none focus:ring-1 focus:ring-colorstack-purple"
              placeholder="johndoe@example.com"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="major" className="block text-sm font-medium text-gray-700 mb-1">
              Major *
            </label>
            <input
              type="text"
              id="major"
              name="major"
              required
              value={formData.major}
              onChange={handleChange}
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-colorstack-purple focus:outline-none focus:ring-1 focus:ring-colorstack-purple"
              placeholder="Computer Science"
            />
          </div>
          
          <div>
            <label htmlFor="year" className="block text-sm font-medium text-gray-700 mb-1">
              Year *
            </label>
            <select
              id="year"
              name="year"
              required
              value={formData.year}
              onChange={handleChange}
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-colorstack-purple focus:outline-none focus:ring-1 focus:ring-colorstack-purple"
            >
              <option value="" disabled>Select your year</option>
              <option value="Freshman">Freshman</option>
              <option value="Sophomore">Sophomore</option>
              <option value="Junior">Junior</option>
              <option value="Senior">Senior</option>
              <option value="Graduate">Graduate Student</option>
            </select>
          </div>
        </div>
        
        <div>
          <label htmlFor="dietaryRestrictions" className="block text-sm font-medium text-gray-700 mb-1">
            Dietary Restrictions (if applicable)
          </label>
          <input
            type="text"
            id="dietaryRestrictions"
            name="dietaryRestrictions"
            value={formData.dietaryRestrictions}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-colorstack-purple focus:outline-none focus:ring-1 focus:ring-colorstack-purple"
            placeholder="Vegetarian, vegan, allergies, etc."
          />
        </div>
        
        <div>
          <span className="block text-sm font-medium text-gray-700 mb-2">
            Areas of Interest (select all that apply)
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {interestOptions.map((option) => (
              <div key={option} className="flex items-center">
                <input
                  type="checkbox"
                  id={`interest-${option}`}
                  name="interests"
                  checked={formData.interests.includes(option)}
                  onChange={() => handleCheckboxChange(option)}
                  className="h-4 w-4 rounded border-gray-300 text-colorstack-purple focus:ring-colorstack-purple"
                />
                <label
                  htmlFor={`interest-${option}`}
                  className="ml-2 text-sm text-gray-700"
                >
                  {option}
                </label>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full btn-primary flex justify-center items-center"
          >
            {isSubmitting ? (
              <span>Processing...</span>
            ) : (
              <span>Register for Event</span>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
