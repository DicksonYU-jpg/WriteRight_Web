import { Paragraph } from "../shared/Paragraph";

interface ServiceProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const Service = ({ title, description, icon }: ServiceProps) => {
  return (
    <div
      className="p-5 sm:p-6 lg:p-8 rounded-3xl border border-box-border bg-box-bg shadow-lg
                    shadow-box-shadow relative overflow-hidden"
    >
      <div className="rounded-xl p-3 text-heading-1 w-max relative flex items-center">
    {icon}
    <h2 className="text-lg pl-2 md:text-xl font-semibold text-heading-2 ml-2">
        {title}
    </h2>
</div>
      <div className="mt-3 space-y-4 relative">
        <Paragraph> {description}</Paragraph>
      </div>
    </div>
  );
};
