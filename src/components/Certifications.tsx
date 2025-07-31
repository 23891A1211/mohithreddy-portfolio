import React from "react";
import { Button } from "@/components/ui/button";

const certifications = [
  {
    title: "Deloitte Cyber Security Virtual Experience",
    url: "https://1drv.ms/b/c/040bd24d97b8cee2/EVHeZGrILzFLj8RuwycDpEUBQ2DAClTdz4ML64wNDzPSXA?e=NDR6da",
    description:
      "Completed Deloitte's Cyber Security Virtual Experience, gaining hands-on exposure to risk assessment, threat mitigation, and enterprise security best practices. Developed skills in vulnerability analysis, incident response, and compliance frameworks."
  },
  {
    title: "Deloitte Data Analytics Virtual Experience",
    url: "https://1drv.ms/b/c/040bd24d97b8cee2/EW7MEupzkNVJpIj5jeyqIoMBMG4tKXC6eRNh8MrAipyH3w?e=FIx2pV",
    description:
      "Acquired practical knowledge in data analytics, business intelligence, and data-driven decision making. Applied advanced Excel, data visualization, and reporting techniques to solve real-world business problems."
  },
  {
    title: "Introduction to Data Science",
    url: "https://1drv.ms/b/c/040bd24d97b8cee2/ESC-TDlzvr1NiYWlyzYD13UB61cgxcNhhBn6bdH78yH4dg?e=wX5t3z",
    description:
      "Gained foundational understanding of data science concepts, including data wrangling, exploratory data analysis, and basic machine learning. Developed proficiency in Python for data manipulation and visualization."
  },
  {
    title: "Python for Data Science (NPTEL)",
    url: "https://1drv.ms/b/c/040bd24d97b8cee2/EYzl-mpizM1HrB1m9wPFtdgBER_ghzvGbY_ra_6SrMsa7Q?e=Im24HD",
    description:
      "Completed NPTEL's Python for Data Science course, covering core Python programming, data structures, libraries (NumPy, Pandas), and data analysis workflows. Demonstrated ability to implement data pipelines and perform statistical analysis."
  },
  {
    title: "AWS Solutions Architect Essentials",
    url: "https://1drv.ms/i/c/040bd24d97b8cee2/ETa4Urdym9lFl6-Mf6-zCVcBxNHGFCMpsEMr1_jR4iTVKA?e=6Si1H3",
    description:
      "Learned AWS cloud architecture fundamentals, including infrastructure design, security, scalability, and cost optimization. Gained experience with core AWS services and best practices for deploying cloud solutions."
  }
];

const Certifications = () => (
  <section id="certifications" className="py-16 bg-background">
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-center gradient-text">Certifications</h2>
      <ul className="space-y-8">
        {certifications.map((cert, idx) => (
          <li key={idx} className="p-6 rounded-lg shadow-lg bg-card border border-border">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <div className="text-xl font-semibold text-primary mb-1">{cert.title}</div>
                <p className="text-muted-foreground text-base">{cert.description}</p>
              </div>
              <a href={cert.url} target="_blank" rel="noopener noreferrer">
                <Button className="mt-4 md:mt-0">View</Button>
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Certifications;