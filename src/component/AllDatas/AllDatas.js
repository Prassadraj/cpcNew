import image1 from "../../images/products/frame1.png";
// Biochemistry
import magna1 from "../AllDatas/ProductImages/Biochemistry/MAGNA/product1.jpg";
import magna2 from "../AllDatas/ProductImages/Biochemistry/MAGNA/product2.jpg";
import magna3 from "../AllDatas/ProductImages/Biochemistry/MAGNA/product3.jpg";
import magna4 from "../AllDatas/ProductImages/Biochemistry/MAGNA/product4.jpg";
import neo1 from "../AllDatas/ProductImages/Biochemistry/NEO/product1.jpg";
import neo2 from "../AllDatas/ProductImages/Biochemistry/NEO/product2.jpg";
import neo3 from "../AllDatas/ProductImages/Biochemistry/NEO/product3.jpg";
import neo4 from "../AllDatas/ProductImages/Biochemistry/NEO/product4.jpg";
import plus1 from "../AllDatas/ProductImages/Biochemistry/PLUS/product1.png";
import plus2 from "../AllDatas/ProductImages/Biochemistry/PLUS/product2.png";
import prim1 from "../AllDatas/ProductImages/Biochemistry/PRIME/product1.jpg";
import prim2 from "../AllDatas/ProductImages/Biochemistry/PRIME/product2.jpg";
// Clinical Microbiology
import ast1 from "../AllDatas/ProductImages/Clinical Microbiology/AST plates/product1.jpg";
import Nephelometer1 from "../AllDatas/ProductImages/Clinical Microbiology/Nephelometer/product1.jpg";
import Automated1 from "../AllDatas/ProductImages/Clinical Microbiology/Automated Inoculation/product1.jpg";
import manual1 from "../AllDatas/ProductImages/Clinical Microbiology/Manual Viewbox/product1.jpg";
import Digital1 from "../AllDatas/ProductImages/Clinical Microbiology/Digital MIC/product1.jpg";
import Fluorometric1 from "../AllDatas/ProductImages/Clinical Microbiology/Fluorometric Plate/product1.png";
import System1 from "../AllDatas/ProductImages/Clinical Microbiology/System for AST/product1.jpeg";
//covid
import ANTIBODY1 from "../AllDatas/ProductImages/Covid/ANTIBODY TESTING/product1.jpg";
import Affinity1 from "../AllDatas/ProductImages/Covid/Affinity RNA/product1.jpg";
import REACTIVE1 from "../AllDatas/ProductImages/Covid/C-REACTIVE/product1.jpg";
import FERRITI1 from "../AllDatas/ProductImages/Covid/FERRITIN/product1.jpg";
import LACTAT1 from "../AllDatas/ProductImages/Covid/LACTATE/product1.jpg";
import PROCALCITONIN1 from "../AllDatas/ProductImages/Covid/PROCALCITONIN/product1.jpg";
import identi1 from "../AllDatas/ProductImages/Covid/identi VTM/product1.jpg";
// Electrolyte Analyzer
import Jokoh1 from "../AllDatas/ProductImages/Electrolyte Analyzer/Jokoh/product1.jpg";
import Jokoh2 from "../AllDatas/ProductImages/Electrolyte Analyzer/Jokoh/product2.jpg";
import Jokoh3 from "../AllDatas/ProductImages/Electrolyte Analyzer/Jokoh/product3.jpg";
// Hematology
import PLUS1 from "../AllDatas/ProductImages/Hematology/3D PLUS/product1.png";
import Analyzer1 from "../AllDatas/ProductImages/Hematology/Analyzer/product1.png";
import Analyzer2 from "../AllDatas/ProductImages/Hematology/Analyzer/product2.png";
import DYNACOUNT1 from "../AllDatas/ProductImages/Hematology/DYNACOUNT 5D/product1.png";
// Point of Care
import ichromaII from "../AllDatas/ProductImages/Point of Care/ichroma™ II/product1.jpg";
import ichromaIII from "../AllDatas/ProductImages/Point of Care/ichroma™ III/product1.jpg";

const products = [
  {
    category: "Biochemistry",
    about:
      "The Biochemistry category includes products and information related to the chemical processes and substances that occur within living organisms. This category encompasses diagnostic tools, reagents, and equipment used for biochemical analyses, such as enzyme assays, metabolite detection, and protein characterization. These products are essential for understanding the molecular mechanisms of diseases and developing effective treatments.",
    items: [
      {
        category: "Biochemistry",
        allover: "This is for fully automatic",
        id: "1",
        image: [magna1, magna2, magna3, magna4],
        title: "TURBOCHEM MAGNA",
        shortdescription:
          "TURBOCHEM MAGNA FULLY AUTOMATIC BIOCHEMISTRY ANALYZER",
        description:
          "Performs a variety of tests including liver function, cholesterol levels, and more, with high accuracy and efficiency.",
        workPrinciple:
          "Uses advanced photometric technology to measure various biochemical parameters.",
        advantages:
          "High throughput, minimal maintenance, and user-friendly interface.",
        benefits:
          "Increases diagnostic accuracy and speeds up the testing process.",
        mainAndCare:
          "Regular calibration and maintenance are required for optimal performance.",
        workServices: "Available technical support and service packages.",
        productBrochure: "path/to/turbochem-magna-brochure.pdf",
        detailedSpecification:
          "Detailed technical specifications available upon request.",
        offerOrDiscounts:
          "Check with the distributor for current offers and discounts.",
      },
      {
        allover: "This is for fully automatic",
        id: "2",
        image: [neo1, neo2, neo3, neo4],
        title: "TURBOCHEM PRIME",
        shortdescription:
          "TURBOCHEM PRIME FULLY AUTOMATIC BIOCHEMISTRY ANALYZER",
        description:
          "Conducts a variety of tests such as metabolic panels and hormone levels, ensuring precise and quick results.",
        workPrinciple:
          "Employs cutting-edge technology to provide accurate biochemical measurements.",
        advantages: "Fast processing time and high accuracy in results.",
        benefits: "Improves diagnostic efficiency and reliability.",
        mainAndCare:
          "Requires periodic calibration and care as per the manual.",
        workServices: "Comprehensive service options available.",
        productBrochure: "path/to/turbochem-prime-brochure.pdf",
        detailedSpecification:
          "In-depth specifications can be provided on request.",
        offerOrDiscounts: "Contact sales for the latest promotions.",
      },
      {
        allover: "This is for fully automatic",
        id: "3",
        image: [plus1, plus2],
        title: "TURBOCHEM NEO",
        shortdescription: "TURBOCHEM NEO FULLY AUTOMATIC BIOCHEMISTRY ANALYZER",
        description:
          "Ideal for performing basic metabolic panels, liver function tests, and more with reliable outcomes.",
        workPrinciple:
          "Utilizes precise measurement techniques for various biochemical tests.",
        advantages: "Reliable performance with minimal manual intervention.",
        benefits: "Enhances testing accuracy and efficiency.",
        mainAndCare: "Routine maintenance and calibration required.",
        workServices: "Support and service packages are available.",
        productBrochure: "path/to/turbochem-neo-brochure.pdf",
        detailedSpecification: "Specifications detailed in the product manual.",
        offerOrDiscounts: "Check for current discounts and offers.",
      },
      {
        allover: "This is for Semi automatic",
        id: "4",
        image: [prim1, prim2],
        title: "TURBOSTAT PLUS",
        shortdescription: "TURBOSTAT PLUS SEMI AUTOMATIC BIOCHEMISTRY ANALYZER",
        description:
          "Commonly used for routine chemistry tests and specific protein analysis with semi-automatic functionality.",
        workPrinciple:
          "Semi-automatic system combining manual and automated operations for biochemical testing.",
        advantages: "Cost-effective and versatile for various applications.",
        benefits: "Ideal for labs with moderate testing volumes.",
        mainAndCare: "Requires semi-regular maintenance and care.",
        workServices: "Service options available upon request.",
        productBrochure: "path/to/turbostat-plus-brochure.pdf",
        detailedSpecification:
          "Detailed specs provided in the product documentation.",
        offerOrDiscounts: "Inquire about current offers from your distributor.",
      },
      {
        allover: "Reagents",
        id: "5",
        image: [image1],
        title: "ichem PRIME",
        description:
          "System pack reagents specifically designed for use with the TURBOCHEM PRIME analyzer, ensuring consistent and accurate results.",
        workPrinciple:
          "High-quality reagents optimized for the TURBOCHEM PRIME system.",
        advantages: "Ensures consistent performance and reliable results.",
        benefits: "Improves the accuracy of biochemical analyses.",
        mainAndCare: "Store according to manufacturer instructions.",
        workServices: "Technical support for reagent use available.",
        productBrochure: "path/to/ichem-prime-brochure.pdf",
        detailedSpecification: "Specifications available on request.",
        offerOrDiscounts: "Check for current promotions and discounts.",
      },
      {
        allover: "Reagents",
        id: "6",
        image: [image1],
        title: "ichem MAGNA",
        description:
          "Guaranteed number of tests ensuring zero wastage and consistent quality for the TURBOCHEM MAGNA analyzer.",
        workPrinciple:
          "Reagents designed for use with the TURBOCHEM MAGNA analyzer.",
        advantages: "Reduces wastage and ensures consistent test quality.",
        benefits: "Provides reliable results with minimal waste.",
        mainAndCare: "Follow storage and handling instructions.",
        workServices: "Customer support available for reagent-related queries.",
        productBrochure: "path/to/ichem-magna-brochure.pdf",
        detailedSpecification: "Available upon request.",
        offerOrDiscounts: "Inquire about available discounts.",
      },
      {
        allover: "Reagents",
        id: "7",
        image: [image1],
        title: "identi Immuno Turbidimetry Reagents",
        description:
          "Homogenized mixture makes antisera ideal for automation, providing accurate and reliable immuno-turbidimetric results.",
        workPrinciple:
          "Specially formulated reagents for immuno-turbidimetric assays.",
        advantages: "Enhances accuracy and reliability in automated systems.",
        benefits: "Improves the quality of immuno-turbidimetric tests.",
        mainAndCare: "Store as per the manufacturer's guidelines.",
        workServices: "Technical assistance available.",
        productBrochure: "path/to/identi-immuno-turbidimetry-brochure.pdf",
        detailedSpecification: "Detailed specifications available on request.",
        offerOrDiscounts: "Contact distributor for current offers.",
      },
      {
        allover: "Reagents",
        id: "8",
        image: [image1],
        title: "identi Reagents",
        description:
          "High quality reagents manufactured to international standards, suitable for a wide range of biochemical tests.",
        workPrinciple:
          "Manufactured to meet high international standards for biochemical testing.",
        advantages: "High consistency and quality in testing.",
        benefits: "Suitable for a broad range of biochemical analyses.",
        mainAndCare: "Proper storage required to maintain quality.",
        workServices: "Support available for reagent use.",
        productBrochure: "path/to/identi-reagents-brochure.pdf",
        detailedSpecification: "Specifications can be provided upon request.",
        offerOrDiscounts: "Check with your distributor for promotions.",
      },
      {
        allover: "Reagents",
        id: "9",
        image: [image1],
        title: "CHEMISTRY CALIBRATOR AND CHEMISTRY CONTROLS",
        description:
          "Reconstituted stability of up to 7 days at 2°C – 8°C or 4 weeks at -20°C, ensuring precise calibration and control in biochemical testing.",
        workPrinciple:
          "Calibrators and controls for maintaining accuracy in biochemical assays.",
        advantages: "Ensures long-term stability and precise calibration.",
        benefits: "Maintains accuracy and reliability in testing.",
        mainAndCare: "Follow storage instructions to maintain stability.",
        workServices:
          "Technical support available for calibration and control.",
        productBrochure: "path/to/chemistry-calibrator-brochure.pdf",
        detailedSpecification: "Detailed information available upon request.",
        offerOrDiscounts: "Inquire about available discounts.",
      },
    ],
  },
  {
    category: "Clinical Microbiology",
    items: [
      {
        topic: "CLINICAL MICROBIOLOGY LABORATORY EQUIPMENTS",
        id: "1",
        image: [ast1],
        title: "Sensititre™ Standard AST Plates",
        shortdescription: "Sensititre™ Standard AST Plates",
        description:
          "Used for antimicrobial susceptibility testing, providing reliable and accurate results for various microbial strains.",
        workPrinciple:
          "Plates with a predefined concentration of antibiotics to test the effectiveness against microbial strains.",
        advantages: "Provides standardized and reproducible results.",
        benefits:
          "Helps in selecting appropriate antimicrobial agents for treatment.",
        mainAndCare:
          "Store in a cool, dry place; follow handling instructions to prevent contamination.",
        workServices:
          "Technical support available for product use and interpretation.",
        productBrochure: "path/to/sensititre-standard-ast-plates-brochure.pdf",
        detailedSpecification:
          "Detailed specifications can be provided on request.",
        offerOrDiscounts: "Inquire about current offers and discounts.",
      },
      {
        topic: "CLINICAL MICROBIOLOGY LABORATORY EQUIPMENTS",
        id: "2",
        image: [Nephelometer1],
        title: "Sensititre™ Nephelometer",
        shortdescription: "Thermo Scientific™ Sensititre™ Nephelometer",
        description:
          "Measures the turbidity of microbial growth, aiding in the determination of antimicrobial susceptibility.",
        workPrinciple:
          "Uses nephelometry to measure turbidity changes indicating microbial growth.",
        advantages:
          "Provides rapid and precise measurements of microbial growth.",
        benefits:
          "Enhances the accuracy of antimicrobial susceptibility tests.",
        mainAndCare:
          "Regular calibration required; keep the unit clean and free from dust.",
        workServices: "Service and calibration support available.",
        productBrochure: "path/to/sensititre-nephelometer-brochure.pdf",
        detailedSpecification: "Specifications available upon request.",
        offerOrDiscounts: "Check for available discounts and promotions.",
      },
      {
        topic: "CLINICAL MICROBIOLOGY LABORATORY EQUIPMENTS",
        id: "3",
        image: [Automated1],
        title: "Sensititre™ AIM™ Automated Inoculation Delivery System",
        shortdescription:
          "Sensititre™ AIM™ Automated Inoculation Delivery System",
        description:
          "Automates the inoculation process for antimicrobial susceptibility testing, enhancing accuracy and efficiency.",
        workPrinciple:
          "Automated system for precise and consistent inoculation of test plates.",
        advantages: "Reduces manual errors and increases testing throughput.",
        benefits:
          "Improves the efficiency and accuracy of susceptibility testing.",
        mainAndCare:
          "Perform regular maintenance and follow operational guidelines.",
        workServices: "Technical support and maintenance services available.",
        productBrochure:
          "path/to/sensititre-aim-automated-inoculation-brochure.pdf",
        detailedSpecification: "Detailed specs can be provided upon request.",
        offerOrDiscounts: "Inquire about current offers.",
      },
      {
        topic: "CLINICAL MICROBIOLOGY LABORATORY EQUIPMENTS",
        id: "4",
        image: [manual1],
        title: "Sensititre™ Manual Viewbox",
        shortdescription: "Thermo Scientific Sensititre™ Manual Viewbox",
        description:
          "A manual device for visual reading of antimicrobial susceptibility test results, providing clear and precise interpretations.",
        workPrinciple:
          "Uses transmitted light to view and interpret test results manually.",
        advantages:
          "Allows for clear visualization of results and manual interpretation.",
        benefits: "Essential for labs requiring manual review of test results.",
        mainAndCare: "Keep the viewbox clean and calibrated regularly.",
        workServices: "Support for calibration and usage available.",
        productBrochure: "path/to/sensititre-manual-viewbox-brochure.pdf",
        detailedSpecification: "Specifications available on request.",
        offerOrDiscounts: "Contact for current promotions.",
      },
      {
        topic: "CLINICAL MICROBIOLOGY LABORATORY EQUIPMENTS",
        id: "5",
        image: [Digital1],
        title: "Sensititre™ Vizion™ Digital MIC Viewing System",
        shortdescription: "Sensititre™ Vizion™ Digital MIC Viewing System",
        description:
          "Digital system for viewing and interpreting minimum inhibitory concentrations (MICs) in antimicrobial susceptibility testing.",
        workPrinciple:
          "Digital imaging system for precise measurement and interpretation of MICs.",
        advantages: "Provides accurate and consistent digital readings.",
        benefits:
          "Enhances the reliability and efficiency of MIC interpretation.",
        mainAndCare: "Ensure regular maintenance and software updates.",
        workServices:
          "Technical support available for system operation and troubleshooting.",
        productBrochure: "path/to/sensititre-vizion-digital-mic-brochure.pdf",
        detailedSpecification:
          "Detailed technical specifications can be provided upon request.",
        offerOrDiscounts: "Check for current discounts and offers.",
      },
      {
        topic: "CLINICAL MICROBIOLOGY LABORATORY EQUIPMENTS",
        id: "6",
        image: [Fluorometric1],
        title:
          "Sensititre™ OptiRead™ Automated Fluorometric Plate Reading System",
        shortdescription:
          "Sensititre™ OptiRead™ Automated Fluorometric Plate Reading System",
        description:
          "Automated system for reading fluorometric plates, providing quick and accurate results for antimicrobial susceptibility tests.",
        workPrinciple:
          "Uses fluorometric technology to read and analyze test plates.",
        advantages:
          "Fast and accurate readings with minimal manual intervention.",
        benefits: "Improves testing efficiency and accuracy.",
        mainAndCare: "Regular calibration and maintenance required.",
        workServices: "Support for system use and maintenance available.",
        productBrochure: "path/to/sensititre-optiread-brochure.pdf",
        detailedSpecification: "Specifications available upon request.",
        offerOrDiscounts: "Inquire about current promotions.",
      },
      {
        topic: "CLINICAL MICROBIOLOGY LABORATORY EQUIPMENTS",
        id: "7",
        image: [System1],
        title: "Sensititre™ ARIS HiQ™ System for AST",
        shortdescription: "Sensititre™ ARIS HiQ™ System for AST",
        description:
          "Automated system for antimicrobial susceptibility testing, offering high throughput and reliable results.",
        workPrinciple:
          "Fully automated system for performing and analyzing antimicrobial susceptibility tests.",
        advantages: "High throughput with consistent and reliable results.",
        benefits: "Reduces manual workload and improves testing accuracy.",
        mainAndCare: "Follow maintenance schedule and operational guidelines.",
        workServices: "Comprehensive support and service options available.",
        productBrochure: "path/to/sensititre-aris-hiq-brochure.pdf",
        detailedSpecification: "Detailed specs can be provided upon request.",
        offerOrDiscounts: "Check with the distributor for current offers.",
      },
    ],
  },
  {
    category: "COVID-19",
    items: [
      {
        id: "1",
        image: [ANTIBODY1],
        title: "identi VTM",
        shortdescription: "identi VTM",
        description:
          "Viral Transport Medium (VTM) for the collection, transport, and preservation of clinical specimens containing viruses, including SARS-CoV-2.",
        workPrinciple:
          "Preserves viral integrity during specimen transport and handling.",
        advantages: "Ensures stability of viral samples until analysis.",
        benefits:
          "Improves the accuracy of viral testing by preserving samples properly.",
        mainAndCare:
          "Store at recommended temperatures; handle according to provided guidelines.",
        workServices:
          "Technical support available for product usage and storage.",
        productBrochure: "path/to/identi-vtm-brochure.pdf",
        detailedSpecification:
          "Detailed specifications available upon request.",
        offerOrDiscounts:
          "Check with distributor for current offers and discounts.",
      },
      {
        id: "2",
        image: [Affinity1],
        title: "identi Affinity RNA extraction",
        shortdescription: "identi Affinity RNA extraction",
        description:
          "High-efficiency RNA extraction kit designed for reliable and rapid isolation of viral RNA from various clinical samples.",
        workPrinciple:
          "Uses advanced chemistry to efficiently isolate RNA from clinical samples.",
        advantages:
          "Provides high yield and purity of RNA for accurate testing.",
        benefits:
          "Ensures reliable results in downstream applications like PCR.",
        mainAndCare:
          "Follow kit instructions carefully; store reagents as recommended.",
        workServices: "Support available for kit usage and troubleshooting.",
        productBrochure: "path/to/identi-affinity-rna-extraction-brochure.pdf",
        detailedSpecification: "Specifications can be provided on request.",
        offerOrDiscounts: "Inquire about current promotions and discounts.",
      },
      {
        id: "3",
        image: [REACTIVE1],
        title: "ANTIBODY TESTING",
        shortdescription: "ANTIBODY TESTING",
        description:
          "Comprehensive antibody testing solutions for detecting the presence of antibodies against SARS-CoV-2 in patient samples.",
        workPrinciple:
          "Detects antibodies produced in response to SARS-CoV-2 infection.",
        advantages: "Helps identify past infections and immune response.",
        benefits:
          "Aids in epidemiological studies and individual immune status assessment.",
        mainAndCare:
          "Ensure proper sample handling and test according to the protocol.",
        workServices:
          "Technical support available for interpreting results and test procedures.",
        productBrochure: "path/to/antibody-testing-brochure.pdf",
        detailedSpecification:
          "Detailed technical specifications available upon request.",
        offerOrDiscounts: "Check for any current offers or discounts.",
      },
      {
        id: "4",
        image: [FERRITI1],
        title: "PROCALCITONIN",
        shortdescription: "PROCALCITONIN",
        description:
          "Biomarker assay for the detection of procalcitonin levels, aiding in the diagnosis of bacterial infections and sepsis.",
        workPrinciple:
          "Measures procalcitonin levels, which rise in response to bacterial infections.",
        advantages:
          "Helps differentiate bacterial infections from other causes of inflammation.",
        benefits:
          "Provides valuable diagnostic information in acute care settings.",
        mainAndCare:
          "Store and handle according to the manufacturer's guidelines.",
        workServices:
          "Support available for assay setup and result interpretation.",
        productBrochure: "path/to/procalcitonin-brochure.pdf",
        detailedSpecification: "Specifications available upon request.",
        offerOrDiscounts: "Inquire about current discounts.",
      },
      {
        id: "5",
        image: [LACTAT1],
        title: "FERRITIN",
        shortdescription: "FERRITIN",
        description:
          "Assay for measuring ferritin levels, useful in the diagnosis and monitoring of iron deficiency and related conditions.",
        workPrinciple:
          "Measures ferritin, a marker of iron stores in the body.",
        advantages:
          "Helps diagnose iron deficiency and monitor treatment efficacy.",
        benefits:
          "Provides insight into iron metabolism and related health conditions.",
        mainAndCare: "Follow storage instructions to ensure assay performance.",
        workServices:
          "Technical support for assay usage and results interpretation.",
        productBrochure: "path/to/ferritin-brochure.pdf",
        detailedSpecification:
          "Detailed specifications available upon request.",
        offerOrDiscounts: "Check for current offers and discounts.",
      },
      {
        id: "6",
        image: [PROCALCITONIN1],
        title: "LACTATE DEHYDROGENASE (LDH-L)",
        shortdescription: "LACTATE DEHYDROGENASE (LDH-L)",
        description:
          "Enzyme assay for lactate dehydrogenase, a marker of tissue damage and inflammation, including in COVID-19 patients.",
        workPrinciple:
          "Measures LDH enzyme levels, which increase with tissue damage.",
        advantages: "Provides information on tissue injury and inflammation.",
        benefits:
          "Useful in diagnosing and monitoring conditions associated with tissue damage.",
        mainAndCare:
          "Store reagents according to guidelines; follow assay instructions carefully.",
        workServices:
          "Support available for assay use and result interpretation.",
        productBrochure: "path/to/ldh-l-brochure.pdf",
        detailedSpecification: "Specifications can be provided on request.",
        offerOrDiscounts: "Inquire about current discounts.",
      },
      {
        id: "7",
        image: [identi1],
        title: "C-REACTIVE PROTEIN (CRP)",
        shortdescription: "C-REACTIVE PROTEIN (CRP)",
        description:
          "CRP assay for the detection of inflammation and infection, useful in managing COVID-19 and other inflammatory conditions.",
        workPrinciple:
          "Detects CRP levels, an indicator of systemic inflammation.",
        advantages: "Helps assess inflammation and infection levels.",
        benefits:
          "Useful in monitoring disease progression and response to treatment.",
        mainAndCare: "Handle samples and reagents according to the protocol.",
        workServices:
          "Technical support available for assay usage and result interpretation.",
        productBrochure: "path/to/crp-brochure.pdf",
        detailedSpecification:
          "Detailed specifications available upon request.",
        offerOrDiscounts: "Check for current promotions and discounts.",
      },
    ],
  },
  {
    category: "Electrolyte Analyzer",
    items: [
      {
        topic: "Electrolyte Analyzer",
        id: "1",
        image: [Jokoh1, Jokoh2, Jokoh3],
        title: "Jokoh EX-D Electrolyte Analyzer",
        shortdescription: "Jokoh EX-D Electrolyte Analyzer",
        description:
          "Advanced electrolyte analyzer providing precise measurements of various electrolytes in blood samples, essential for clinical diagnostics.",
        workPrinciple:
          "Utilizes ion-selective electrodes to measure electrolyte concentrations in blood samples.",
        advantages: "High accuracy and reliability in electrolyte measurement.",
        benefits:
          "Critical for diagnosing and managing electrolyte imbalances in patients.",
        mainAndCare:
          "Regular calibration and maintenance required; follow operational guidelines for optimal performance.",
        workServices:
          "Technical support and service options available for system maintenance and troubleshooting.",
        productBrochure: "path/to/jokoh-ex-d-brochure.pdf",
        detailedSpecification:
          "Detailed specifications can be provided upon request.",
        offerOrDiscounts:
          "Check with the distributor for current offers and discounts.",
      },
    ],
  },
  {
    category: "Hematology",
    items: [
      {
        allover: "3 Part Differential Hematology Analyzer",
        id: "1",
        image: [PLUS1],
        title: "DYNACOUNT 3D Haematology Analyzer",
        shortdescription: "DYNACOUNT 3D Fully Automatic Hematology Analyzer",
        description:
          "Fully automatic analyzer offering accurate and detailed blood cell counts with a 3-part differential analysis.",
        workPrinciple:
          "Utilizes advanced optics and sensors to perform differential blood cell counts.",
        advantages:
          "High accuracy and automation reduce manual intervention and errors.",
        benefits:
          "Essential for routine blood tests and diagnosing blood disorders.",
        mainAndCare:
          "Regular calibration and maintenance required; follow operational guidelines.",
        workServices:
          "Technical support and service options available for system maintenance and troubleshooting.",
        productBrochure: "path/to/dynacount-3d-brochure.pdf",
        detailedSpecification: "Specifications available upon request.",
        offerOrDiscounts:
          "Check with distributor for current offers and discounts.",
      },
      {
        allover: "3 Part Differential Hematology Analyzer",
        id: "2",
        image: [Analyzer1, Analyzer2],
        title: "DYNACOUNT 3D PLUS",
        shortdescription:
          "DYNACOUNT 3D PLUS Fully Automatic Hematology Analyzer",
        description:
          "Enhanced version of the 3D model, providing more detailed and faster blood cell analysis with advanced features.",
        workPrinciple:
          "Enhanced optical and sensor technology for faster and more detailed analysis.",
        advantages:
          "Faster analysis with advanced features for improved diagnostic capability.",
        benefits:
          "Ideal for high-throughput labs needing quick and detailed blood cell counts.",
        mainAndCare:
          "Follow the manufacturer's maintenance schedule and guidelines.",
        workServices:
          "Comprehensive technical support available for installation and troubleshooting.",
        productBrochure: "path/to/dynacount-3d-plus-brochure.pdf",
        detailedSpecification:
          "Detailed specifications can be provided upon request.",
        offerOrDiscounts: "Inquire about current promotions and discounts.",
      },
      {
        allover: "5 Part Differential Hematology Analyzer",
        id: "3",
        image: [DYNACOUNT1],
        title: "DYNACOUNT 5D",
        shortdescription: "DYNACOUNT 5D Fully Automatic Hematology Analyzer",
        description:
          "5-part differential analyzer delivering comprehensive blood cell counts, crucial for detailed hematological diagnostics.",
        workPrinciple:
          "Employs advanced technologies to provide a 5-part differential analysis of blood cells.",
        advantages: "Comprehensive analysis for detailed diagnostic insights.",
        benefits:
          "Supports complex diagnostics and monitoring of hematological conditions.",
        mainAndCare:
          "Regular maintenance and calibration needed; follow provided guidelines.",
        workServices:
          "Available technical support for installation, maintenance, and troubleshooting.",
        productBrochure: "path/to/dynacount-5d-brochure.pdf",
        detailedSpecification:
          "Detailed technical specifications available on request.",
        offerOrDiscounts:
          "Check for current offers and discounts with the distributor.",
      },
    ],
  },
  {
    category: "Immunology",
    items: [
      {
        id: "1",
        image: [image1],
        title: "PLEXMAT 4",
        shortdescription: "PLEXMAT 4",
        description:
          "The PLEXMAT 4 is an advanced immunoblot analyzer designed for high throughput and reliable results in various immunological assays.",
        workPrinciple:
          "Utilizes immunoblotting technology to detect and quantify proteins in various samples.",
        advantages:
          "High throughput and reliability for diverse immunological applications.",
        benefits:
          "Ideal for laboratories requiring efficient and accurate immunoblot analysis.",
        mainAndCare:
          "Follow manufacturer guidelines for calibration and maintenance.",
        workServices:
          "Technical support available for installation and troubleshooting.",
        productBrochure: "path/to/plexmat-4-brochure.pdf",
        detailedSpecification: "Specifications can be provided upon request.",
        offerOrDiscounts:
          "Check with distributor for current promotions and discounts.",
      },
      {
        id: "2",
        image: [image1],
        title: "PLEXMAT 8",
        shortdescription: "PLEXMAT 8",
        description:
          "The PLEXMAT 8 offers enhanced performance and efficiency for immunoblot analysis, suitable for diverse laboratory needs.",
        workPrinciple:
          "Advanced immunoblotting technology with improved performance features.",
        advantages:
          "Enhanced performance for more efficient immunoblot analysis.",
        benefits:
          "Suitable for labs with diverse and high-volume testing needs.",
        mainAndCare:
          "Regular calibration and maintenance required; follow guidelines.",
        workServices: "Comprehensive technical support provided.",
        productBrochure: "path/to/plexmat-8-brochure.pdf",
        detailedSpecification: "Detailed specs available on request.",
        offerOrDiscounts: "Inquire about current offers with the distributor.",
      },
      {
        id: "4",
        image: [image1],
        title: "iFlash 1200",
        shortdescription: "YHLO IFlash 1200",
        description:
          "The iFlash 1200 Chemiluminescence Immunoassay Analyzer delivers precise and rapid results, making it ideal for various diagnostic applications.",
        workPrinciple:
          "Uses chemiluminescence technology for accurate immunoassay results.",
        advantages:
          "High sensitivity and rapid results for diverse diagnostics.",
        benefits: "Efficient for high-throughput diagnostic testing.",
        mainAndCare: "Follow the manufacturer's maintenance instructions.",
        workServices:
          "Available technical support for system setup and maintenance.",
        productBrochure: "path/to/iflash-1200-brochure.pdf",
        detailedSpecification: "Detailed specifications available on request.",
        offerOrDiscounts: "Check for current offers and discounts.",
      },
      {
        id: "5",
        image: [image1],
        title: "iFlash 1800",
        shortdescription: "iFlash 1800",
        description:
          "The iFlash 1800 is a robust Chemiluminescence Immunoassay Analyzer known for its high sensitivity and throughput, perfect for large laboratories.",
        workPrinciple:
          "Advanced chemiluminescence technology for comprehensive immunoassays.",
        advantages:
          "High sensitivity and high throughput for large-scale testing.",
        benefits: "Ideal for busy labs needing reliable and fast results.",
        mainAndCare:
          "Routine calibration and maintenance needed; adhere to guidelines.",
        workServices:
          "Technical support available for troubleshooting and service.",
        productBrochure: "path/to/iflash-1800-brochure.pdf",
        detailedSpecification: "Specifications can be provided on request.",
        offerOrDiscounts:
          "Inquire about promotions and discounts with distributor.",
      },
      {
        id: "6",
        image: [image1],
        title: "iFlash 1800",
        shortdescription: "iFlash 1800",
        description:
          "Another entry for the iFlash 1800, highlighting its continued popularity and reliability in immunoassay diagnostics.",
        workPrinciple:
          "Chemiluminescence-based technology ensuring accurate and rapid immunoassay results.",
        advantages:
          "Proven reliability and high performance in various diagnostic applications.",
        benefits:
          "Continues to be a popular choice for large-scale diagnostic labs.",
        mainAndCare:
          "Regular maintenance required; follow operational guidelines.",
        workServices: "Comprehensive support and service options available.",
        productBrochure: "path/to/iflash-1800-brochure.pdf",
        detailedSpecification: "Detailed specs available upon request.",
        offerOrDiscounts:
          "Check with distributor for current offers and discounts.",
      },
      {
        id: "7",
        image: [image1],
        title: "iFLASH 3000",
        shortdescription: "iFLASH 3000",
        description:
          "The iFLASH 3000 is a Fully Automated Immunoassay Analyzer that offers extensive testing capabilities and user-friendly operation.",
        workPrinciple:
          "Fully automated system utilizing chemiluminescence for diverse immunoassay testing.",
        advantages:
          "Extensive testing capabilities with user-friendly interface.",
        benefits:
          "Suitable for comprehensive diagnostic needs and high-volume testing.",
        mainAndCare:
          "Follow manufacturer guidelines for maintenance and operation.",
        workServices:
          "Technical support available for installation and troubleshooting.",
        productBrochure: "path/to/iflash-3000-brochure.pdf",
        detailedSpecification:
          "Detailed specifications available upon request.",
        offerOrDiscounts: "Inquire about current offers and discounts.",
      },
      {
        id: "8",
        image: [image1],
        title: "KRYPTOR compact PLUS",
        shortdescription: "Everlife Kryptor Compact Plus",
        description:
          "The KRYPTOR compact PLUS is an advanced analyzer for immunoassays, known for its precision and reliability in diagnostic testing.",
        workPrinciple:
          "Immunoassay technology for accurate and reliable diagnostic results.",
        advantages:
          "High precision and compact design for efficient laboratory use.",
        benefits:
          "Ideal for labs requiring reliable and precise immunoassay testing.",
        mainAndCare:
          "Adhere to maintenance and calibration guidelines for optimal performance.",
        workServices:
          "Technical support available for installation and service.",
        productBrochure: "path/to/kryptor-compact-plus-brochure.pdf",
        detailedSpecification: "Specifications available upon request.",
        offerOrDiscounts:
          "Check with distributor for current promotions and discounts.",
      },
      {
        id: "9",
        image: [image1],
        title: "EUROIMMUN Analyzer I-2P",
        shortdescription: "Everlife Euroimmun Analyzer I-2P",
        description:
          "The EUROIMMUN Analyzer I-2P offers comprehensive immunoassay automation, enhancing laboratory efficiency and accuracy.",
        workPrinciple:
          "Automated system for performing a wide range of immunoassays.",
        advantages:
          "Increases laboratory efficiency with comprehensive automation.",
        benefits:
          "Ideal for improving accuracy and throughput in immunoassay testing.",
        mainAndCare:
          "Regular maintenance and calibration needed; follow operational guidelines.",
        workServices:
          "Technical support available for system setup and troubleshooting.",
        productBrochure: "path/to/euroimmun-analyzer-i-2p-brochure.pdf",
        detailedSpecification: "Detailed specs available on request.",
        offerOrDiscounts: "Inquire about current offers with the distributor.",
      },
      {
        id: "10",
        image: [image1],
        title: "EUROBlotOne",
        shortdescription: "EUROBlotOne",
        description:
          "EUROBlotOne is a fully automated system for immunoblot processing, providing high-quality results with minimal manual intervention.",
        workPrinciple:
          "Automated processing for immunoblot assays ensuring high-quality results.",
        advantages:
          "Reduces manual intervention while ensuring consistent results.",
        benefits:
          "Ideal for labs needing reliable and efficient immunoblot processing.",
        mainAndCare:
          "Follow manufacturer's maintenance instructions for optimal performance.",
        workServices:
          "Available technical support for installation and troubleshooting.",
        productBrochure: "path/to/euroblotone-brochure.pdf",
        detailedSpecification: "Specifications available upon request.",
        offerOrDiscounts:
          "Check with distributor for current offers and discounts.",
      },
      {
        id: "11",
        image: [image1],
        title: "IF Sprinter",
        shortdescription: "IF Sprinter",
        description:
          "The IF Sprinter is designed for fully automated immunofluorescence assays, ensuring consistent and accurate diagnostic outcomes.",
        workPrinciple:
          "Automated system for immunofluorescence assays providing accurate results.",
        advantages: "Consistent results with minimal manual intervention.",
        benefits:
          "Ideal for accurate and efficient immunofluorescence testing.",
        mainAndCare:
          "Regular maintenance required; follow operational guidelines.",
        workServices: "Technical support available for setup and service.",
        productBrochure: "path/to/if-sprinter-brochure.pdf",
        detailedSpecification: "Detailed specifications available on request.",
        offerOrDiscounts:
          "Inquire about promotions and discounts with distributor.",
      },
      {
        id: "12",
        image: [image1],
        title: "EUROStar III Plus",
        shortdescription: "EUROStar III Plus",
        description:
          "The EUROStar III Plus is a state-of-the-art Fluorescence Immunoassay Analyzer, known for its precision and advanced diagnostic capabilities.",
        workPrinciple:
          "Uses fluorescence technology for precise immunoassay analysis.",
        advantages:
          "High precision and advanced capabilities for comprehensive diagnostics.",
        benefits:
          "Suitable for detailed and accurate fluorescence immunoassay testing.",
        mainAndCare:
          "Follow the manufacturer's guidelines for maintenance and calibration.",
        workServices:
          "Technical support available for installation and troubleshooting.",
        productBrochure: "path/to/eurostar-iii-plus-brochure.pdf",
        detailedSpecification: "Detailed specs available upon request.",
        offerOrDiscounts: "Check for current promotions with distributor.",
      },
      {
        id: "13",
        image: [image1],
        title: "EUROPattern Microscope",
        shortdescription: "EUROPattern Microscope",
        description:
          "The EUROPattern Microscope combines high-resolution imaging with automated analysis, ideal for fluorescence immunoassays.",
        workPrinciple:
          "High-resolution imaging combined with automated analysis for immunoassays.",
        advantages:
          "Combines high-resolution imaging with automation for improved diagnostics.",
        benefits:
          "Perfect for detailed and accurate fluorescence immunoassay analysis.",
        mainAndCare: "Adhere to maintenance and calibration guidelines.",
        workServices: "Technical support available for setup and service.",
        productBrochure: "path/to/europattern-microscope-brochure.pdf",
        detailedSpecification: "Specifications available upon request.",
        offerOrDiscounts: "Inquire about current offers with the distributor.",
      },
      {
        id: "14",
        image: [image1],
        title: "FluoroMAT 50",
        shortdescription: "FluoroMAT 50",
        description:
          "The FluoroMAT 50 is a versatile Fluorescence Immunoassay Analyzer, offering reliable and rapid diagnostic testing.",
        workPrinciple:
          "Utilizes fluorescence technology for rapid and reliable immunoassay results.",
        advantages: "Versatile and reliable for various diagnostic tests.",
        benefits:
          "Efficient for both routine and specialized fluorescence immunoassay testing.",
        mainAndCare:
          "Follow manufacturer's maintenance and operational guidelines.",
        workServices:
          "Available technical support for installation and troubleshooting.",
        productBrochure: "path/to/fluoromat-50-brochure.pdf",
        detailedSpecification: "Detailed specifications available on request.",
        offerOrDiscounts:
          "Check with distributor for current promotions and discounts.",
      },
      {
        id: "15",
        image: [image1],
        title: "iFlash 1800 REAGENTS",
        shortdescription: "iFlash 1800 REAGENTS",
        description:
          "Reagents specifically designed for use with the iFlash 1800, ensuring optimal performance and accuracy in immunoassays.",
        workPrinciple:
          "High-quality reagents designed for optimal performance with iFlash 1800.",
        advantages:
          "Ensures accurate and reliable results when used with the iFlash 1800.",
        benefits:
          "Essential for maintaining the performance of the iFlash 1800 analyzer.",
        mainAndCare:
          "Store according to manufacturer guidelines; use within recommended timeframe.",
        workServices:
          "Technical support available for reagent usage and troubleshooting.",
        productBrochure: "path/to/iflash-1800-reagents-brochure.pdf",
        detailedSpecification: "Specifications available upon request.",
        offerOrDiscounts:
          "Inquire about current offers and discounts with distributor.",
      },
      {
        id: "16",
        image: [image1],
        title: "AUTOIMMUNE & INFECTIOUS DISEASES – IIFT",
        shortdescription: "AUTOIMMUNE & INFECTIOUS DISEASES – IIFT",
        description:
          "A range of reagents for indirect immunofluorescence tests (IIFT), essential for diagnosing autoimmune and infectious diseases.",
        workPrinciple:
          "Reagents for performing indirect immunofluorescence tests for disease diagnostics.",
        advantages:
          "Essential for accurate diagnosis of autoimmune and infectious diseases.",
        benefits: "Supports a wide range of diagnostic applications.",
        mainAndCare:
          "Store according to manufacturer guidelines; use as directed.",
        workServices:
          "Technical support available for reagent usage and troubleshooting.",
        productBrochure: "path/to/iift-reagents-brochure.pdf",
        detailedSpecification: "Detailed specifications available on request.",
        offerOrDiscounts: "Check for current promotions with distributor.",
      },
      {
        id: "17",
        image: [image1],
        title: "AUTOIMMUNE & INFECTIOUS DISEASES – ELISA",
        shortdescription: "AUTOIMMUNE & INFECTIOUS DISEASES – ELISA",
        description:
          "ELISA reagents for the detection and diagnosis of autoimmune and infectious diseases, ensuring high sensitivity and specificity.",
        workPrinciple:
          "Reagents for enzyme-linked immunosorbent assays (ELISA) to detect diseases.",
        advantages:
          "High sensitivity and specificity for accurate disease diagnosis.",
        benefits: "Ideal for detailed and reliable diagnostic testing.",
        mainAndCare:
          "Store according to guidelines; use within recommended timeframe.",
        workServices:
          "Technical support available for reagent handling and troubleshooting.",
        productBrochure: "path/to/elisa-reagents-brochure.pdf",
        detailedSpecification: "Specifications available upon request.",
        offerOrDiscounts: "Inquire about current offers with distributor.",
      },
      {
        id: "18",
        image: [image1],
        title: "AUTOIMMUNE & INFECTIOUS LIA – EUROLINE",
        shortdescription: "AUTOIMMUNE & INFECTIOUS LIA – EUROLINE",
        description:
          "EUROLINE reagents for line immunoassays, providing accurate and reliable results for autoimmune and infectious disease diagnostics.",
        workPrinciple:
          "Reagents for line immunoassays for diagnosing autoimmune and infectious diseases.",
        advantages: "Provides accurate and reliable diagnostic results.",
        benefits:
          "Efficient for detecting a range of autoimmune and infectious conditions.",
        mainAndCare:
          "Follow storage and usage guidelines provided by the manufacturer.",
        workServices:
          "Technical support available for reagent use and troubleshooting.",
        productBrochure: "path/to/euroline-reagents-brochure.pdf",
        detailedSpecification: "Detailed specifications available on request.",
        offerOrDiscounts:
          "Check with distributor for current offers and discounts.",
      },
      {
        id: "19",
        image: [image1],
        title: "ALLERGY PROFILE",
        shortdescription: "ALLERGY PROFILE",
        description:
          "Comprehensive reagents for allergy profiling, aiding in the accurate diagnosis of various allergic conditions.",
        workPrinciple:
          "Reagents for comprehensive allergy testing and profiling.",
        advantages: "Accurate and detailed profiling of allergic conditions.",
        benefits: "Supports precise diagnosis and management of allergies.",
        mainAndCare:
          "Store according to manufacturer's instructions; use as directed.",
        workServices:
          "Technical support available for handling and troubleshooting.",
        productBrochure: "path/to/allergy-profile-brochure.pdf",
        detailedSpecification: "Specifications available upon request.",
        offerOrDiscounts: "Inquire about current offers with the distributor.",
      },
      {
        id: "20",
        image: [image1],
        title: "BRAHMS BIOMARKERS",
        shortdescription: "BRAHMS BIOMARKERS",
        description:
          "BRAHMS biomarkers for various diagnostic applications, known for their reliability and accuracy in clinical settings.",
        workPrinciple:
          "Biomarkers used for various diagnostic purposes, providing reliable results.",
        advantages: "Reliable and accurate for clinical diagnostics.",
        benefits:
          "Supports a range of diagnostic applications with high accuracy.",
        mainAndCare:
          "Follow storage and usage guidelines provided by the manufacturer.",
        workServices:
          "Technical support available for troubleshooting and service.",
        productBrochure: "path/to/brahms-biomarkers-brochure.pdf",
        detailedSpecification:
          "Detailed specifications available upon request.",
        offerOrDiscounts: "Check for current promotions with distributor.",
      },
      {
        id: "21",
        image: [image1],
        title: "BÜHLMANN LABORATORIES",
        shortdescription: "BÜHLMANN LABORATORIES",
        description:
          "A range of diagnostic reagents from BÜHLMANN Laboratories, catering to various immunological and biochemical assays.",
        workPrinciple:
          "Reagents for immunological and biochemical assays from BÜHLMANN Laboratories.",
        advantages:
          "High quality and reliability for diverse diagnostic applications.",
        benefits: "Covers a broad range of assays with dependable results.",
        mainAndCare: "Store and use as per manufacturer guidelines.",
        workServices:
          "Available technical support for reagent handling and service.",
        productBrochure: "path/to/buhlmann-laboratories-brochure.pdf",
        detailedSpecification: "Specifications available upon request.",
        offerOrDiscounts: "Inquire about current offers with the distributor.",
      },
      {
        id: "22",
        image: [image1],
        title: "SARS – COV 2",
        shortdescription: "SARS – COV 2",
        description:
          "Reagents for the detection of SARS-CoV-2, essential for COVID-19 diagnostic testing and monitoring.",
        workPrinciple:
          "Reagents designed for the detection of SARS-CoV-2 in diagnostic tests.",
        advantages: "Essential for accurate COVID-19 testing and monitoring.",
        benefits: "Supports reliable detection and diagnosis of SARS-CoV-2.",
        mainAndCare:
          "Follow storage and handling guidelines provided by the manufacturer.",
        workServices:
          "Technical support available for reagent use and troubleshooting.",
        productBrochure: "path/to/sars-cov-2-reagents-brochure.pdf",
        detailedSpecification:
          "Detailed specifications available upon request.",
        offerOrDiscounts: "Check for current promotions with distributor.",
      },
      {
        id: "23",
        image: [image1],
        title: "iFlash 1200 REAGENTS",
        shortdescription: "iFlash 1200 REAGENTS",
        description:
          "Reagents tailored for the iFlash 1200, ensuring optimal performance in chemiluminescence immunoassays.",
        workPrinciple:
          "High-quality reagents designed for use with the iFlash 1200 system.",
        advantages:
          "Ensures optimal performance and accuracy in chemiluminescence assays.",
        benefits:
          "Essential for maintaining the iFlash 1200's diagnostic accuracy.",
        mainAndCare:
          "Store according to manufacturer's guidelines; use within recommended timeframe.",
        workServices:
          "Technical support available for reagent handling and usage.",
        productBrochure: "path/to/iflash-1200-reagents-brochure.pdf",
        detailedSpecification: "Specifications available upon request.",
        offerOrDiscounts:
          "Inquire about current offers and discounts with distributor.",
      },
    ],
  },

  {
    category: "Point of Care",
    items: [
      {
        topic: "POCT Hormone Analyzer",
        id: "1",
        image: [ichromaII],
        title: "ichroma™ II",
        shortdescription: "iChroma 2 POCT Hormone Analyzer",
        description:
          "The ichroma™ II is a versatile and reliable POCT hormone analyzer, designed to deliver fast and precise measurements of hormone levels, facilitating effective clinical decision-making.",
        workPrinciple:
          "Utilizes advanced immunoassay technology for accurate hormone measurement.",
        advantages:
          "Provides quick results with high precision, suitable for various clinical settings.",
        benefits:
          "Enhances diagnostic accuracy and supports timely clinical decisions.",
        mainAndCare:
          "Follow manufacturer's guidelines for calibration and maintenance; handle with care to avoid damage.",
        workServices:
          "Technical support available for setup, troubleshooting, and maintenance.",
        productBrochure: "path/to/ichroma-II-brochure.pdf",
        detailedSpecification:
          "Detailed specifications available upon request.",
        offerOrDiscounts:
          "Inquire about current offers and discounts with distributor.",
      },
      {
        topic: "POCT Hormone Analyzer",
        id: "2",
        image: [ichromaIII],
        title: "ichroma™ III",
        shortdescription: "iChroma 3 POCT Hormone Analyzer",
        description:
          "The ichroma™ III is a high-performance point-of-care testing (POCT) hormone analyzer, providing accurate and rapid results for various hormone assays, essential for timely diagnosis and treatment.",
        workPrinciple:
          "Employs cutting-edge technology for rapid and accurate hormone analysis.",
        advantages:
          "High performance with rapid results and reliability, accommodating various hormone assays.",
        benefits:
          "Facilitates prompt diagnosis and treatment decisions with high accuracy.",
        mainAndCare:
          "Store and calibrate according to the manufacturer's recommendations; regular maintenance is crucial.",
        workServices:
          "Support services available for operational and technical assistance.",
        productBrochure: "path/to/ichroma-III-brochure.pdf",
        detailedSpecification:
          "Detailed specifications available upon request.",
        offerOrDiscounts:
          "Check with the distributor for any available offers and discounts.",
      },
    ],
  },
  {
    category: "Pre-Analytical Automation",
    items: [
      {
        topic: "Sample Sorter",
        id: "1",
        image: [image1],
        title: "SortPro Sample Sorter",
        shortdescription: "Fully Automatic 3-Part SortPro Sample Sorter",
        description:
          "The SortPro Sample Sorter is a fully automatic 3-part sorter, engineered to streamline the pre-analytical phase by efficiently sorting and preparing samples, thereby enhancing laboratory workflow and accuracy.",
        workPrinciple:
          "Automates the sorting and preparation of samples using advanced technology for improved efficiency.",
        advantages:
          "Increases laboratory throughput and reduces manual errors, providing consistent and accurate sample handling.",
        benefits:
          "Enhances workflow efficiency, reduces labor costs, and minimizes sample handling errors.",
        mainAndCare:
          "Regular maintenance required to ensure optimal performance; follow manufacturer's care instructions.",
        workServices:
          "Comprehensive support available for installation, maintenance, and troubleshooting.",
        productBrochure: "path/to/sortpro-sample-sorter-brochure.pdf",
        detailedSpecification:
          "Specifications include sorting capacity, speed, and compatibility with different sample types.",
        offerOrDiscounts:
          "Check with distributor for current promotions and pricing offers.",
      },
    ],
  },
];
export default products;
