
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const JoinForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    major: "",
    year: "",
    whyJoin: "",
    referral: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call with timeout
      await new Promise((resolve) => setTimeout(resolve, 800));
      
      console.log("Join form submitted:", formData);
      
      toast({
        title: "Application submitted!",
        description: "Thank you for your interest in joining ColorStack. We'll be in touch soon!",
        variant: "default",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        major: "",
        year: "",
        whyJoin: "",
        referral: "",
      });
    } catch (error) {
      toast({
        title: "Submission failed",
        description: "There was an error processing your application. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
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
          <label htmlFor="whyJoin" className="block text-sm font-medium text-gray-700 mb-1">
            Why are you interested in joining ColorStack? *
          </label>
          <textarea
            id="whyJoin"
            name="whyJoin"
            required
            rows={4}
            value={formData.whyJoin}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-colorstack-purple focus:outline-none focus:ring-1 focus:ring-colorstack-purple"
            placeholder="Tell us why you want to join and what you hope to get out of the experience."
          />
        </div>
        
        <div>
          <label htmlFor="referral" className="block text-sm font-medium text-gray-700 mb-1">
            How did you hear about us?
          </label>
          <input
            type="text"
            id="referral"
            name="referral"
            value={formData.referral}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-colorstack-purple focus:outline-none focus:ring-1 focus:ring-colorstack-purple"
            placeholder="Friend, social media, campus event, etc."
          />
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
              <span>Submit Application</span>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default JoinForm;
