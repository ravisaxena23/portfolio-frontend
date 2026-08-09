import React, { useMemo, useState } from "react";
import { usePortfolio } from "../../context/PortfolioContext";
import useReveal from "../../hooks/useReveal";

const Skills = () => {
  const { ref, visible } = useReveal();
  const { skillGroups } = usePortfolio();
  const [active, setActive] = useState("All");

  const filters = useMemo(
    () => ["All", ...(skillGroups || []).map((g) => g.title)],
    [skillGroups]
  );

  const rows = useMemo(() => {
    const groups = skillGroups || [];
    if (active === "All") return groups;
    return groups.filter((g) => g.title === active);
  }, [skillGroups, active]);

  return (
    <section
      id="skills"
      className={`section skills reveal ${visible ? "is-visible" : ""}`}
      ref={ref}
    >
      <p className="section-kicker">Technical skills</p>
      <h2 className="section-heading">Core expertise</h2>
      <p className="section-lede">
        Filter by domain — the same stack I use to ship SaaS, events, and AI
        workflows.
      </p>

      <div className="skills__filters" role="tablist" aria-label="Skill domains">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            role="tab"
            aria-selected={active === filter}
            className={`skills__filter ${active === filter ? "is-active" : ""}`}
            onClick={() => setActive(filter)}
          >
            {filter === "All" ? "All" : filter.split(" ")[0]}
          </button>
        ))}
      </div>

      <div className="skills__matrix">
        {rows.map((group) => (
          <div className="skills__row" key={group.title}>
            <h3 className="skills__domain">{group.title}</h3>
            <ul className="skills__tiles">
              {group.items.map((item) => (
                <li key={item}>
                  <span className="skills__mark" aria-hidden="true" />
                  <span className="skills__name">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
