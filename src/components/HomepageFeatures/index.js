import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Maintained by active dev mentors and mentees :)",
    Svg: require("@site/static/img/homepage_pandalf_1.svg").default,
    description: (
      <>
        The dev mentoring handbook is an open source handbook maintained by the
        OfferZen Mentoring Commmunity.
      </>
    ),
  },
  {
    title: "Tested and iterated on every month",
    Svg: require("@site/static/img/homepage_pandalf_2.svg").default,
    description: (
      <>
        With new mentoring pairs using this guide every month, the contents are
        tried, tested, and frequently iterated on.
      </>
    ),
  },
  {
    title: "Built to help you help devs",
    Svg: require("@site/static/img/homepage_pandalf_3.svg").default,
    description: (
      <>
        Use this guide in your personal capacity or to implement an impactful
        mentoring programme in your workplace.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
