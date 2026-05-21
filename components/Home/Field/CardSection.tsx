import FieldCard from "./FieldCard";

export default function CardSection() {
  return (
    <div className="w-full mt-8">
      <div className="w-full max-w-[1240px] mx-auto">
        <div className="grid grid-cols-4 gap-5">
          {Array.from({ length: 8 }, (_, index) => (
            <FieldCard key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
