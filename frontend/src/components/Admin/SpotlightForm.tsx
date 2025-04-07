
import { useState, useEffect } from "react";
import { Member } from "../../utils/mockData";
import { useToast } from "@/hooks/use-toast";

interface SpotlightFormProps {
  member?: Member;
  onSubmit: (member: Omit<Member, "id">) => void;
  onCancel: () => void;
}

const SpotlightForm = ({ member, onSubmit, onCancel }: SpotlightFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    bio: "",
    image: "",
    achievements: [""],
    featured: false,
  });

  useEffect(() => {
    if (member) {
      setFormData({
        name: member.name,
        role: member.role,
        bio: member.bio,
        image: member.image,
        achievements: [...member.achievements],
        featured: member.featured,
      });
    }
  }, [member]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const val = type === "checkbox" ? (e.target as HTMLInputElement).checked : value;
    
    setFormData((prev) => ({ ...prev, [name]: val }));
  };

  const handleAchievementChange = (index: number, value: string) => {
    const updatedAchievements = [...formData.achievements];
    updatedAchievements[index] = value;
    setFormData((prev) => ({ ...prev, achievements: updatedAchievements }));
  };

  const addAchievement = () => {
    setFormData((prev) => ({
      ...prev,
      achievements: [...prev.achievements, ""],
    }));
  };

  const removeAchievement = (index: number) => {
    const updatedAchievements = formData.achievements.filter((_, i) => i !== index);
    setFormData((prev) => ({ ...prev, achievements: updatedAchievements }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.role || !formData.bio) {
      toast({
        title: "Missing required fields",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    
    // Filter out empty achievements
    const filteredAchievements = formData.achievements.filter(achievement => achievement.trim() !== "");
    
    onSubmit({
      ...formData,
      achievements: filteredAchievements,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Member Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-colorstack-purple focus:outline-none focus:ring-1 focus:ring-colorstack-purple"
          placeholder="Jordan Smith"
        />
      </div>
      
      <div>
        <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
          Role/Position *
        </label>
        <input
          type="text"
          id="role"
          name="role"
          required
          value={formData.role}
          onChange={handleChange}
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-colorstack-purple focus:outline-none focus:ring-1 focus:ring-colorstack-purple"
          placeholder="Chapter President"
        />
      </div>
      
      <div>
        <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-1">
          Bio *
        </label>
        <textarea
          id="bio"
          name="bio"
          required
          rows={4}
          value={formData.bio}
          onChange={handleChange}
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-colorstack-purple focus:outline-none focus:ring-1 focus:ring-colorstack-purple"
          placeholder="A brief bio about the member..."
        />
      </div>
      
      <div>
        <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-1">
          Image URL *
        </label>
        <input
          type="text"
          id="image"
          name="image"
          required
          value={formData.image}
          onChange={handleChange}
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-colorstack-purple focus:outline-none focus:ring-1 focus:ring-colorstack-purple"
          placeholder="/images/member-photo.jpg"
        />
      </div>
      
      <div>
        <span className="block text-sm font-medium text-gray-700 mb-2">
          Achievements
        </span>
        
        {formData.achievements.map((achievement, index) => (
          <div key={index} className="flex items-center mb-2">
            <input
              type="text"
              value={achievement}
              onChange={(e) => handleAchievementChange(index, e.target.value)}
              className="flex-1 rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-colorstack-purple focus:outline-none focus:ring-1 focus:ring-colorstack-purple"
              placeholder="Google STEP Internship"
            />
            <button
              type="button"
              onClick={() => removeAchievement(index)}
              className="ml-2 text-red-500 hover:text-red-700"
              disabled={formData.achievements.length <= 1}
            >
              Remove
            </button>
          </div>
        ))}
        
        <button
          type="button"
          onClick={addAchievement}
          className="text-colorstack-purple hover:text-colorstack-purple/80 text-sm font-medium"
        >
          + Add Achievement
        </button>
      </div>
      
      <div className="flex items-center">
        <input
          type="checkbox"
          id="featured"
          name="featured"
          checked={formData.featured}
          onChange={handleChange}
          className="h-4 w-4 rounded border-gray-300 text-colorstack-purple focus:ring-colorstack-purple"
        />
        <label htmlFor="featured" className="ml-2 text-sm text-gray-700">
          Feature this member on the homepage
        </label>
      </div>
      
      <div className="flex justify-end space-x-4">
        <button
          type="button"
          onClick={onCancel}
          className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="btn-primary"
        >
          {member ? "Update Member" : "Add Member"}
        </button>
      </div>
    </form>
  );
};

export default SpotlightForm;
