/*
  CASESTUDYDETAIL.JSX
  -------------------
  Dynamic template — ONE file renders the detail page for every case
  study, same pattern as ServiceDetail.jsx. useParams() reads the
  "slug" from the URL (e.g. /case-studies/tasty-gold-oils -> slug =
  "tasty-gold-oils") and looks it up once data/caseStudies.js exists.
*/
import { useParams } from 'react-router-dom';

export default function CaseStudyDetail() {
  const { slug } = useParams();

  return (
    <main className="section">
      <div className="container">
        <p className="eyebrow">Case study</p>
        <h1>{slug}</h1>
        {/* TODO: pull challenge / strategy / results / metrics
            from data/caseStudies.js using this slug */}
      </div>
    </main>
  );
}