
import { useState } from "react";
import AdminLayout from "../../components/Layout/AdminLayout";
import SpotlightForm from "../../components/Admin/SpotlightForm";
import { Member, members as mockMembers } from "../../utils/mockData";
import { User, Edit, Trash2, Star, Plus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const SpotlightManagement = () => {
  const { toast } = useToast();
  const [members, setMembers] = useState<Member[]>(mockMembers);
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  
  const handleAddMember = () => {
    setSelectedMember(null);
    setIsCreating(true);
  };
  
  const handleEditMember = (member: Member) => {
    setSelectedMember(member);
    setIsCreating(false);
  };
  
  const handleDeleteMember = (memberId: number) => {
    if (window.confirm("Are you sure you want to delete this member?")) {
      setMembers(members.filter(member => member.id !== memberId));
      
      toast({
        title: "Member deleted",
        description: "The member has been successfully deleted.",
        variant: "default",
      });
    }
  };
  
  const handleToggleFeature = (memberId: number) => {
    if (members.some(m => m.featured && m.id !== memberId)) {
      if (!window.confirm("This will unfeature the currently featured member. Continue?")) {
        return;
      }
    }
    
    const updated = members.map(member => ({
      ...member,
      featured: member.id === memberId ? !member.featured : false
    }));
    
    setMembers(updated);
    
    toast({
      title: updated.find(m => m.id === memberId)?.featured 
        ? "Member featured" 
        : "Member unfeatured",
      description: updated.find(m => m.id === memberId)?.featured 
        ? "This member is now featured on the homepage." 
        : "This member is no longer featured.",
      variant: "default",
    });
  };
  
  const handleFormSubmit = (memberData: Omit<Member, "id">) => {
    if (selectedMember) {
      // Update existing member
      const updated = members.map(member => 
        member.id === selectedMember.id
          ? { ...member, ...memberData }
          : member.featured && memberData.featured
            ? { ...member, featured: false }
            : member
      );
      
      setMembers(updated);
      
      toast({
        title: "Member updated",
        description: "The member has been successfully updated.",
        variant: "default",
      });
    } else {
      // Create new member
      const newMember: Member = {
        id: Math.max(0, ...members.map(m => m.id)) + 1,
        ...memberData,
      };
      
      // If the new member is featured, unfeature others
      const updatedMembers = memberData.featured
        ? members.map(member => ({ ...member, featured: false }))
        : [...members];
      
      setMembers([...updatedMembers, newMember]);
      
      toast({
        title: "Member added",
        description: "The new member has been successfully added.",
        variant: "default",
      });
    }
    
    setSelectedMember(null);
    setIsCreating(false);
  };
  
  const handleFormCancel = () => {
    setSelectedMember(null);
    setIsCreating(false);
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Member Spotlight Management</h1>
          <button
            onClick={handleAddMember}
            className="btn-primary flex items-center"
          >
            <Plus size={16} className="mr-2" />
            Add New Member
          </button>
        </div>
        
        {isCreating || selectedMember ? (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-6">
              {isCreating ? "Add New Member" : "Edit Member"}
            </h2>
            <SpotlightForm 
              member={selectedMember || undefined} 
              onSubmit={handleFormSubmit} 
              onCancel={handleFormCancel} 
            />
          </div>
        ) : (
          <>
            {/* Featured Member */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-colorstack-purple text-white px-6 py-3">
                <h2 className="font-bold">Featured Member</h2>
              </div>
              <div className="p-6">
                {members.filter(member => member.featured).length > 0 ? (
                  members
                    .filter(member => member.featured)
                    .map((member) => (
                      <div key={member.id} className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-1/4">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-48 object-cover rounded-md"
                          />
                        </div>
                        <div className="md:w-2/4">
                          <h3 className="text-lg font-semibold">{member.name}</h3>
                          <p className="text-gray-600 text-sm mb-3">{member.role}</p>
                          <p className="text-gray-700">{member.bio}</p>
                          
                          {member.achievements.length > 0 && (
                            <div className="mt-4">
                              <h4 className="font-medium text-gray-700 mb-1">Achievements</h4>
                              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                                {member.achievements.map((achievement, index) => (
                                  <li key={index}>{achievement}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                        <div className="md:w-1/4 flex md:flex-col flex-row justify-end md:items-end gap-2">
                          <button
                            onClick={() => handleToggleFeature(member.id)}
                            className="p-2 border border-yellow-400 rounded-md bg-yellow-50 text-yellow-600"
                            title="Currently featured"
                          >
                            <Star size={18} fill="currentColor" />
                            <span className="sr-only">Featured</span>
                          </button>
                          <button
                            onClick={() => handleEditMember(member)}
                            className="p-2 border border-gray-300 rounded-md hover:bg-gray-50 text-gray-700"
                          >
                            <Edit size={18} />
                            <span className="sr-only">Edit</span>
                          </button>
                          <button
                            onClick={() => handleDeleteMember(member.id)}
                            className="p-2 border border-red-300 rounded-md hover:bg-red-50 text-red-600"
                          >
                            <Trash2 size={18} />
                            <span className="sr-only">Delete</span>
                          </button>
                        </div>
                      </div>
                    ))
                ) : (
                  <div className="text-center text-gray-600">
                    No featured member set. Feature a member from the list below.
                  </div>
                )}
              </div>
            </div>
            
            {/* All Members */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-700 text-white px-6 py-3">
                <h2 className="font-bold">All Members</h2>
              </div>
              <div className="divide-y">
                {members.filter(member => !member.featured).length > 0 ? (
                  members
                    .filter(member => !member.featured)
                    .map((member) => (
                      <div key={member.id} className="p-6 flex flex-col md:flex-row gap-6">
                        <div className="md:w-1/5">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-32 object-cover rounded-md"
                          />
                        </div>
                        <div className="md:w-3/5">
                          <h3 className="text-lg font-semibold">{member.name}</h3>
                          <p className="text-gray-600 text-sm mb-2">{member.role}</p>
                          <p className="text-gray-700 text-sm line-clamp-2">{member.bio}</p>
                        </div>
                        <div className="md:w-1/5 flex md:flex-col flex-row justify-end md:items-end gap-2">
                          <button
                            onClick={() => handleToggleFeature(member.id)}
                            className="p-2 border border-gray-300 rounded-md hover:bg-yellow-50 hover:border-yellow-300 text-gray-500 hover:text-yellow-600"
                            title="Feature this member"
                          >
                            <Star size={18} />
                            <span className="sr-only">Feature</span>
                          </button>
                          <button
                            onClick={() => handleEditMember(member)}
                            className="p-2 border border-gray-300 rounded-md hover:bg-gray-50 text-gray-700"
                          >
                            <Edit size={18} />
                            <span className="sr-only">Edit</span>
                          </button>
                          <button
                            onClick={() => handleDeleteMember(member.id)}
                            className="p-2 border border-red-300 rounded-md hover:bg-red-50 text-red-600"
                          >
                            <Trash2 size={18} />
                            <span className="sr-only">Delete</span>
                          </button>
                        </div>
                      </div>
                    ))
                ) : (
                  <div className="p-6 text-center text-gray-600">
                    No additional members. Click "Add New Member" to create one.
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </AdminLayout>
  );
};

export default SpotlightManagement;
