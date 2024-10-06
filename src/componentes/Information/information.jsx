import 'bootstrap/dist/css/bootstrap.min.css';
import './information.css';

export default function InformationPage() {
    return (
    <div className = "information-container">
          <h1 className="information-title">
            INFORMATION
          </h1>
          <div className="mb-8">
            <h2 className = "information-second-title" >What are GLOBE protocols</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
            GLOBE protocols are procedures for collecting scientific environmental data, organized by Earth's spheres (atmosphere, biosphere, hydrosphere, pedosphere).
            Part of the NASA-sponsored GLOBE program, they promote global science education and research. 
            Protocols cover topics like air temperature, water pH, and soil moisture, using specific instruments and adhering to GLOBE standards.
            Measurement frequency varies, with some needing daily input, while others are site-specific.
            </p>
          </div>
          <div className="mb-8">
            <h3 className = "information-second-title" >What is Hydrosphere</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
            It's when we talk about the Earth's surface waters, including streams, rivers, lakes and coastal waters.
            GLOBE's research in the hydrosphere allows us to monitor these waters to understand their conditions,
            how they vary throughout the year, and whether they are changing over time.
            </p>
          </div>
          <div className="mb-8">
            <h4 className = "information-second-title" >What is pH</h4>
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