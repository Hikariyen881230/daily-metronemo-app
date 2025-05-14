interface IBeatAppearance {
  list: BeatList[];
}

export type BeatList = {
  id: number;
  isActive: boolean;
};

export default function BeatAppearance(props: IBeatAppearance) {
  return (
    <div
      className="beat-list w-full min-h-10 py-12 md:py-20"
      data-aos="zoom-in"
      data-aos-delay="600"
    >
      <ul className="w-full flex-wrap h-full flex justify-center items-center gap-10">
        {props.list.map((li) => (
          <li key={li.id} className={`${li.isActive ? "active" : " "}`}></li>
        ))}
      </ul>
    </div>
  );
}
