import 'bootstrap/dist/css/bootstrap.min.css';
import './information.css';

export default function InformationPage() {
    return (
    <div className = "information-container">
          <h1 className="information-title">
            INFORMATION
          </h1>
          <div className="mb-8">
            <h2 className = "information-second-title" >What is Hydrosphere</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
            It's when we talk about the Earth's surface waters, including streams, rivers, lakes and coastal waters.
            GLOBE's research in the hydrosphere allows us to monitor these waters to understand their conditions,
            how they vary throughout the year, and whether they are changing over time.
            </p>
          </div>
          <div className="mb-8">
            <h2 className = "information-third-title" >What is pH</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
            The pH is a measure that indicates the level of acidity or alkalinity of a solution, based on the concentration of hydrogen ions present.
            The pH scale ranges from 0 to 14, with 7 being neutral. Solutions with a pH less than 7 are considered acidic,
            while those with a pH greater than 7 are alkaline or basic. The scale is logarithmic, which means that a one-unit change in pH corresponds to a tenfold change in hydrogen ion concentration.
            For example, a solution with pH 4 has ten times more hydrogen ions than one with pH 5, and 100 times more than one with pH 6.
            </p>
          </div>
      </div>
    );
  }