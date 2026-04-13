import { workshops } from "../utils/data";
import WorkshopCard from "../components/WorkshopCard";

export default function Workshops() {
  return (
    <div className="container">
      <h2>All Workshops</h2>
      <div className="grid">
        {workshops.map(w => (
          <WorkshopCard key={w.id} workshop={w} />
        ))}
      </div>
    </div>
  );
}