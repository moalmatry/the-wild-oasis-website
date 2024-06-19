import SelectCountry from "@/app/_components/SelectCountry";
import UpdateProfile from "@/app/_components/UpdateProfileForm";

export const metadata = {
  title: "Update profile",
};

export default function ProfilePage() {
  const nationality = "portugal";
  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-4">
        Update your guest profile
      </h2>

      <p className="text-lg mb-8 text-primary-200">
        Providing the following information will make your check-in process
        faster and smoother. See you soon!
      </p>

      {/* we did that because both SelectCountry & Profile page are server components */}
      <UpdateProfile>
        <SelectCountry
          name="nationality"
          id="nationality"
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
          defaultCountry={nationality}
        />
      </UpdateProfile>
    </div>
  );
}
