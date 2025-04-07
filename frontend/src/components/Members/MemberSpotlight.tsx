
import { Member } from "../../utils/mockData";

interface MemberSpotlightProps {
  member: Member;
  featured?: boolean;
}

const MemberSpotlight = ({ member, featured = false }: MemberSpotlightProps) => {
  return featured ? (
    <div className="bg-gradient-to-r from-colorstack-purple/10 to-colorstack-magenta/10 rounded-xl p-8 shadow-lg">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="w-full md:w-1/3">
          <img
            src={member.image}
            alt={member.name}
            className="w-full aspect-square object-cover rounded-lg shadow-md border-4 border-white bg-white"
          />
        </div>
        <div className="w-full md:w-2/3">
          <div className="mb-2">
            <span className="text-sm font-medium text-colorstack-purple bg-colorstack-purple/10 px-3 py-1 rounded-full">
              Featured Member
            </span>
          </div>
          <h3 className="text-3xl font-bold mb-2">{member.name}</h3>
          <p className="text-lg text-gray-600 mb-4">{member.role}</p>
          <p className="text-gray-700 mb-6">{member.bio}</p>
          <div>
            <h4 className="text-lg font-semibold mb-2">Achievements</h4>
            <ul className="space-y-1">
              {member.achievements.map((achievement, index) => (
                <li key={index} className="flex items-center">
                  <span className="text-colorstack-purple mr-2">•</span>
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="card-highlight h-full flex flex-col">
      <div className="relative pb-3">
        <img
          src={member.image}
          alt={member.name}
          className="w-full aspect-square object-cover rounded-t-lg"
        />
      </div>
      <div className="flex-1 flex flex-col">
        <h3 className="text-xl font-bold mb-1">{member.name}</h3>
        <p className="text-sm text-gray-600 mb-3">{member.role}</p>
        <p className="text-gray-700 mb-4 text-sm line-clamp-3">{member.bio}</p>
        <div className="mt-auto">
          {member.achievements.length > 0 && (
            <div className="border-t pt-3">
              <p className="text-sm font-medium text-colorstack-purple">
                {member.achievements[0]}
                {member.achievements.length > 1 && "..."}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MemberSpotlight;
