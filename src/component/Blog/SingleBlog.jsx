import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  FaRegUserCircle,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import blog1 from "../../assets/image/Hematology-analyzer-blog.png";
import blog2 from "../../assets/image/Difference-Between-3-Part-and-5-Part-Hematology-Analyzer.png";
import blog3 from "../../assets/image/Biochemistry-Analyzer-Its-working-principle-uses-and-price.jpg";
import blogcommon from "../../assets/image/Frame-md.png"
import blog4 from "../../assets/image/blog-4.jpg"
import blog5 from "../../assets/image/blog-5.jpg"
import blog6 from "../../assets/image/blog-7.png"
import blog7 from "../../assets/image/dnynacount.png"
import blog8 from "../../assets/image/Membrane_740x480.png"
import blog9 from "../../assets/image/hypersensive-european-man-suffers-from-allergy-has-red-swelling-eyes-inflammation-nose-sick-man-caught-cold-uses-nasal-drops-holds-handkerchief-symptoms-flu-fever-needs-treatment-768x512.jpg"
import blog10 from "../../assets/image/woman-patient-receives-thyroid-diagnostics-treatment-thyrotoxicosis-hypothyroidism-ultrasound-diagnostics-endocrine-system-thyroid-768x512.jpg"
import blog11 from "../../assets/image/medium-shot-woman-looking-through-microscope-768x549.jpg"
import blog12 from "../../assets/image/blog-12.jpg"
import blog13 from "../../assets/image/blog-13.jpg"
import blog14 from "../../assets/image/blog-14.jpg"
import blog15 from "../../assets/image/blog-15.jpg"
import blog16 from "../../assets/image/blog-16.jpg"
import blog17 from "../../assets/image/blog-17.webp"
import blog18 from "../../assets/image/blog-18.png"
import Footer from '../../homepages/Footer/Footer'

const blogs = [
  //this is first blog
  {
    id: 1,
    title: "Hematology Analyzer Machine:Its Working principle, Uses and Price",
    admin: "by admin",
    date: "May 31, 2024",
    image: blog1,
    content: "Full content of the first blog...",
    sections: [
      {
        startcontent: 'Ever wondered what happens to your blood sample after a checkup? A key player behind the scenes is the hematology analyzer. This medical marvel automates the process of counting and identifying your blood cells, giving doctors a vital glimpse into your health. From routine blood work to complex diagnoses, hematology analyzers play a crucial role in keeping you healthy.',
      },
      {
 
        id: "ha",
        title: "Hematology Analyzer",
        content: "A hematology analyzer, also known as a CBC or complete blood count machine, is the most important equipment in a medical laboratory. This equipment measures and assesses the elements of blood: red and white blood cells, platelets, hemoglobin, and hematocrit. These measurements are crucial for the diagnosis of conditions, patient monitoring, and guiding the choice of therapy.There exist two major types of hematology analyzers: 3 part and 5 part hematology analyzers.",
        content1: "A 3 part hematology analyzer is a standard model in which the classification of white blood cells is into three types: lymphocytes, monocytes, and granulocytes. Generally, most of the small laboratories use 3-part hematology analyzers because of their ease of handling and cost.",
        content2: "On the other hand, the 5 part hematology analyzer focuses deeper into categorizing blood cells and identifies five different types of white blood cells as follows: neutrophils, lymphocytes, monocytes, eosinophils, and basophils. This technology is considered a fully automatic hematology analyzer and can be applied in bigger medical facilities, because the results are more elaborate and thus it is good for more complicated diagnostic needs.",
      },
      {
        id: "hwp",
        title: "Hematology Analyzer Working Principle",
        content: "The working principle of a hematology analyzer depends on the type and technique of the device. Here is a brief overview of how each technique works. Electrical impedance: This technique uses an electric current to detect the presence and size of the cells as they pass through a small opening (orifice) in a container filled with an electrolyte solution. The cells cause a temporary change in the electrical resistance of the solution, which is measured and converted into cell counts and volumes. This technique can differentiate between RBCs, WBCs. Flow cytometry: This technique uses a laser beam to illuminate the cells as they flow through a narrow channel (flow cell) in a fluid stream. The cells scatter the light in different directions and intensities depending on their shape, structure, and composition. The scattered light is detected by sensors at various angles and converted into signals that indicate the cell type and properties. This technique can differentiate between different types of WBCs (neutrophils, lymphocytes, monocytes, eosinophils, and basophils) based on their granularity, diameter, and inner complexity.",
      },
      {
        id: "hau",
        title: "Hematology Analyzer Uses",
        content3: "Hematology analyzers are very critical to the medical diagnosing process, and they do execute so many important functions. Here are five key uses",
        content4: '1. Disease Diagnosis: Diagnose and identify a range of conditions, including anemia, infection, and leukemia, in blood analysis component levels.',
        content5: '2. Monitoring: Monitor the course of disease and treatment over time, particularly in diseases with a chronic course, such as sickle cell disease and other hematological disorders.',
        content6: '3. Blood Count: Perform full blood count tests, with comprehensive reports on red cells, white cells, platelet counts, and hemoglobin levels needed for routine health checkups.',
        content7: '4. Therapeutic Monitoring: Blood cells and their functions are routinely measured to monitor the efficacy of the treatments given, such as chemotherapy or other drug therapies.',
        content8: '5. Research Applications: Helps in medical research as the availability of precise counts and classifications in blood cells thus facilitating further advancements in studies in hematology and other medical research.',
      },
      {
        id: "hapin",
        title: "Hematology Analyzer Price in India",
        topic1: '3-Part Hematology Analyzers price',
        content9: "Approximate Price Range: ₹2,10,000 to ₹2,75,000 per piece",
     
content10:"The fully automatic 3-part hematology analyzers offer an economical solution for clinical settings, providing key functionalities to analyze white blood cells, red blood cells, and platelets. These systems are ideal for small to medium-sized labs looking for cost-effective options.",
topic2: '5-Part Hematology Analyzers price',
content11: "Approximate Price Range: ₹3,00,000 to ₹5,00,000 per piece",
content12: 'The fully automatic 5-part hematology analyzers deliver a more comprehensive cell count, including individual counts for five different types of white blood cells. They are perfect for larger laboratories or hospitals needing extensive and high-volume analysis capabilities.',
      },
      {
        final: "CPC Diagnostics Pvt Ltd ",
      }
    ],
  },
  //this is second blog
  {
    id: 2,
    title: "Difference Between 3 Part and 5 Part Hematology Analyzer",
    admin: "by admin",
    date: "May 25, 2024",
    image: blog2,
    content: "Full content of the second blog...",
    sections: [
      {
      startcontent: 'Hematology analyzers, also known as CBC machines, are classified into fully automatic and semi-automatic models currently available on the market. The primary difference between the 3-part and 5-part hematology analyzers lies in their methods for counting and classifying white blood cells (WBCs), which are essential for combating diseases and infections. While low-volume laboratories typically use 3-part differential hematology analyzers, there is an increasing trend towards adopting 5-part differential hematology analyzers. Explore the reasons behind this shift',  
      },
      {
        id: "ha",
        title: "Hematology analyzer/ CBC Machine",
        content: "A CBC machine, or hematology analyzer, is an essential instrument in medical laboratories for performing complete blood counts. These devices examine different elements of blood, such as red blood cells, white blood cells, and platelets. By delivering comprehensive details about the composition of blood, hematology analyzers are instrumental in diagnosing various medical issues, including infections, anemia, and leukemia. Their significance in contemporary healthcare is crucial, as they provide prompt and precise diagnoses that influence the direction of patient treatment and care.",
       
      },
      {
        id: "hwp",
        title: "3-Part Differential Hematology Analyzer- CBC Machine",
        content: "A Fully Automated 3 Part Differential hematology analyzer counts three kinds of WBCs, RBCs, hemoglobin, hematocrit, and platelets using the electrical impedance method. It is simple, fast, and cheap. It is good for basic blood tests and screening. Dynacount 3D and Dynacount 3D PLUS are the two products of the 3-part differential hematology analyzers from Everlife CPC Diagnostics. They can process 60 samples per hour and measure 24 and 23 parameters, respectively. They have a large LCD touchscreen, a smart counting mode, one-touch error removal, and bidirectional LIS connectivity. The Dynacount 3D PLUS also has a research mode that can calculate the neutrophil-to-lymphocyte ratio (NLR) and platelet-to-lymphocyte ratio (PLR) for inflammation and prognosis.",
        topic2: '3 Part hematology analyzer price',
        content11: '3-Part Hematology Analyzers Approximate Price Range: ₹2,10,000 to ₹2,75,000 per piece',
        content12: 'The 3-part hematology analyzers offer an economical solution for clinical settings, providing key functionalities to analyze white blood cells, red blood cells, and platelets. These systems are ideal for small to medium-sized labs looking for cost-effective options.',
      },
      {
        id: "hau",
        title: "5-Part Differential Hematology Analyzer- CBC Machine",
        content: "A Fully Automated 5 Part Differential hematology analyzer counts five kinds of WBCs, RBCs, haemoglobin, hematocrit, platelets, and other parameters using electrical impedance and flow cytometry methods. It is advanced, accurate, and comprehensive. It can show the shape and function of blood cells. It can also find immature or abnormal cells. It is good for diagnosing complex blood diseases and monitoring treatment.",
        content4: 'Dynacount 5D is a 5-part hematology analyzer from Everlife CPC Diagnostics that can analyze up to 60 samples per hour. It uses four scattergrams and two histograms to derive 28 parameters + 8 research parameters. It employs laser scatter flow cytometry to differentiate all types of WBCs with high precision. It also includes a robust system that manages and assures the quality of the data.',
        topic1: '5 Part hematology analyzer price',
        content10: '5-Part Hematology Analyzers Approximate Price Range: ₹3,00,000 to ₹5,00,000 per piece',
      },
      {
     

content7:"The 5-part hematology analyzers deliver a more comprehensive cell count, including individual counts for five different types of white blood cells. They are perfect for larger laboratories or hospitals needing extensive and high-volume analysis capabilities.",
      },
      {
        final: "CPC Diagnostics Pvt Ltd ",
      }
    ],
  },
  //this is third blog
  {
    id: 3,
    title: "Biochemistry Analyzer: It's working principle, uses and price",
    admin: "by admin",
    date: "Feb 27, 2024",
    image: blog3,
    content: "Full content of the third blog...",
    sections: [
      {
        startcontent: "From routine checkups to complex diseases, there's a hidden force behind your diagnosis. Let's explore the world of biochemistry analyzers and learn how they work and empower doctors to make the best decisions for your health",
      },
      {
        id: "ha",
        title: "What is a Biochemistry Analyzer?",
        content: "Biochemistry analyzer/ clinical chemistry analyzer is the modern lab tool of high importance for both research and diagnostics in medicine. They evaluate samples such as blood, urine and cerebrospinal fluid to acquire vital health information which aids in diagnosing disease, monitoring treatment and making patient care decisions.",
       
      },
      {
        id: "hau",
        title: "The working principle of the biochemistry analyzer",
        content: "A biochemistry analyzer works by the principle of spectrophotometry, a phenomenon that identifies the reaction of a biological sample with certain reagents. This analyzer operates in stages: sampling preparation, sample analysis, detection, and Data analysis.",
        content1: '1. In sample preparation, the sample undergoes centrifugation and reaction with required reagents.',
        content2: '2.  Lastly, cuvettes containing reagents and enzymes are used to analyze the sample that produces forms of detectable signals.',
        content3: '3. Detection also involves the measurement of those signals and comparing them to a standard curve.',
        content4: '4. Lastly, data analysis formulates a report that describes analyte concentrations and reference levels.',
        content5: 'The process enables reliable quantification of biochemical parameters and thus assists in making diagnoses of diseases and monitoring treatment. ',
      },
      {
        id: "hwp",
        title: "Uses of biochemistry analyzer",
        content: "Biochemistry analyzers indeed display widespread usefulness within medical areas and facilities, facilitating doctors and practitioners in the treatment of diseases as well as the management of critical health problems.",
        content6: "These tools are widely used in referral laboratories to conduct various investigations, such as albumin concentration, fasting blood sugar levels, cholesterin, and so on. Interestingly, highly specialized types of biochemistry analyzers are applied in clinics for the analysis of antigen-antibody binding within biochemical reactions. Furthermore, advanced biochemistry analysers have become integral parts of the pharmaceutical sector, enabling the diagnosis of severe diseases.",
        content7: "However, beyond medical areas biochemistry analyzers play a key role in life science research which covers a range of investigations like cell metabolism, protein synthesis, genetics, and some clinical laboratories. Medical researchers use such analyzers in the exploration of the structure and functionality of a wide range of biomolecules inside cells; these biomolecules include lipids, enzymes, nucleic acids and many others.",
        content8: "The chemistry analyzers, as an applied medical device, play the principal role in medical research and pharmaceuticals, supporting drug findings, advancing clinical research, and providing the tools for diagnostic and therapeutic purposes. In brief, they are the products for laboratory staff, physicians, and patients as well, and they are indispensable game-changers for modern healthcare practices and better outcomes for patients.",
      },
   
      {
        id: "hapin",
        title: "Biochemistry analyzer price in India",
        content: "The pricing of Biochemistry analyzers in India can vary due to factors like the features, level of automation, and brand. At CPC Diagnostics, we provide a range of analyzers to suit your needs, including semi-auto analyzer options like the Turbostat and Turbostat Plus, as well as fully automatic analyzer models such as the Turbochem Magna and Turbochem Prime.",
       topic1:"Semi-Automatic Biochemistry Analyzer Price:",
       content9:"1. These are particularly developed for budget-constrained multi-purpose labs and private hospitals.",
       content10:"2. The prices start from around 65,000 rupees and go up to 8,50,000 rupees.",
      topic2:"Fully Automated Biochemistry Analyzer Price:",
      content11:"1. These are the advanced instruments which are more efficient and perfect for large-scale hospitals and diagnostic centres.",
      content12:"2. Prices are a variable factor, depending on the specific division ranging from around 3,00,000 rupees to several lakhs.",
      },
      {
        final: "CPC Diagnostics Pvt Ltd ",
      }
    ],
  },
//this is fourth blog
  {
    id: 4,
    title: "What a Hemo-globin is and Common Types of Blood Disorder?",
    admin: "by admin",
    date: " Jul 6, 2023",
    image: blog4,
    content: "Full content of the third blog...",
    sections: [
      {
        startcontent: "Blood disorders occur when the cells in the blood do not function as they should, causing certain symptoms and related issues. The most common blood abnormalities are as follows: ",
      },
     
      {
        id: "hau",
       
        content: "1. Anemia: People with anemia have a low number of red blood cells. Mild anemia often causes no symptoms. More severe anemia can cause fatigue, pale skin, and shortness of breath with exertion.",
        content1: '2. Thalassemia: This is a genetic form of anemia which affects the body’s ability to produce hemoglobin and red blood cells. These patients may need regular blood transfusions to relieve anemia symptoms. ',
        content2: '3.  Sickle cell anemia: A genetic condition that causes the red blood cells to be sticky and stiff, which obstructs proper blood flow. Severe pain and organ damage can occur. ',
        content3: '4. Polycythemia vera: The body produces too many red blood cells, from an unknown cause. The excess red blood cells usually create no problems, but may cause blood clots in some people and can turn fatal. ',
        content4: '5. Lymphoma: A form of blood cancer that develops in the lymph system. In lymphoma, a white blood cell becomes malignant, multiplying and spreading abnormally. Treatment with chemotherapy and/or radiation can often extend life with lymphoma, and sometimes cure it. ',
        content5: '6. Leukemia: A form of blood cancer in which a white blood cell becomes malignant and multiplies inside bone marrow. Leukemia may be acute (rapid and severe) or chronic (slowly progressing). Chemotherapy and/or stem cell transplantation (bone marrow transplant) can be used to treat leukemia, and may result in a cure.  ',
        content6: '7. Multiple myeloma: A blood cancer in which a white blood cell called a plasma cell becomes malignant. The plasma cells multiply and release damaging substances that eventually cause organ damage. Multiple myeloma has no cure, but stem cell transplant and/or chemotherapy can improve longevity. ',
        content7: '8. Thrombocytopenia: A low number of platelets in the blood; numerous conditions can cause thrombocytopenia, but most are not severe and do not result in abnormal bleeding. ',
        content8: '9. Purpura: A condition causing a persistently low number of platelets in the blood, due to an unknown cause; usually, there are no symptoms, yet abnormal bruising, small red spots on the skin, or abnormal bleeding can result.',
        content9: '10. Von Willebrand disease: It is an inherited bleeding disorder. People with von Willebrand disease can have heavier-than-normal bleeding after an injury, surgery, menstrual flow and childbirth. In rare cases, this condition can be fatal.',
        content10: '11. Hemophilia: Hemophilia is a rare, inherited bleeding disorder in which blood cannot clot normally at the site of a wound or injury. The disorder occurs because certain blood clotting factors are missing or do not work properly. Because a clot does not form, extensive bleeding can be caused from a cut or wound. This is called external bleeding. Bleeding inside the body, called internal bleeding, can occur as well, especially in muscles and in joints like the hips and knees.',
       
      },
     
      {
        final: "CPC Diagnostics Pvt Ltd ",
      }
    ],
  },
//this is fifth blog
{
  id: 5,
  title: "An Introduction to a Fully Automated Immunoassay Analyzer",
  admin: "by admin",
  date: "Jul 6, 2023",
  image: blog5,
  content: "Full content of the third blog...",
  sections: [
    {
      startcontent: "An introduction to a fully automated immunoassay (IA) analyzer. A detailed description of how the machine works, including how it’s controlled and automated.",
    },
    {
     
      content: "An immunoassay analyzer is a laboratory instrument that automates an assay which can be performed manually. This is done using an automated platform and does not require any operator intervention during the analysis of each sample.",
     
    },
    {
     
      content: "As the word “analyzer” suggests, fully automated assays or immunoassays use automation to separate and analyze the components of a test sample. This type of analyzer looks and acts like an immunoassay chromatography instrument, with extremely high-speed electrophoresis.",
     
    },
    {
 
      title: "Fully Automated Immunoassay Analyzer",
      content: "An Immunoassay analyzer (IA) is a test for the presence of specific antibodies in samples of human blood or other body fluids. When done properly, immunoassays are extremely sensitive and specific. An IA can detect hundreds or even thousands of different antibodies in a single sample, compared to an ELISA that contains only a few hundred antigens. With modern IA technology, it is now possible (using commercially-available instrumentation) to detect analytes (substances of interest) from a variety of specimens as small as a few micrometers using only single cells and/or very few samples.",
      content1: "The application of immunoassays has evolved tremendously over the years. These tools have been instrumental in detecting the presence or absence of a specific substance within the body, or as in the case of ELISA and RIA, measuring levels of substances in biological fluids. The term “analyzer” is used to describe either a device or software that performs such an assay. Analyzers are used by many different industries because they help improve production and quality control while also reducing overall cost by reducing labor input.",
     
    },
 
    {
     
     
     content9:"An immunoassay is used to detect the presence of a specific analyte in a sample. Here we will discuss the unit operation of an assay and how it works.",
   
    },
    {
      final: "CPC Diagnostics Pvt Ltd ",
    }
  ],
},
//this is sixth blog
{
  id: 6,
  title: "How to Ensure  Effective Result in Haematology Analyzers",
  admin: "by admin",
  date: "Jul 6, 2023",
  image: blog6,
  content: "Full content of the third blog...",
  sections: [
    {
      startcontent: "In this article, you will be learning to use Hematology Analyzers by by reading and understanding a few tips and tricks that could help you inform your patients about the benefit of using Hematology devices in geriatric healthcare.",
    },
    {
     
      content: "Haematology analyzers are one of the most important pieces of diagnostic equipment that can be used to help diagnose potential health problems. They are used by doctors and other medical professionals when they suspect that a patient may have anemia.  Haematology analyzers test for many different things including red blood cell counts, white blood cells and proteins.",
     
    },
    {
     
      content: "Haematology instruments are instruments that analyze blood components and tissues. A haematologist is a medical specialist who deals with blood characteristics. Haematology analyzers are used in hospitals, laboratories and clinical settings to analyze patients’ blood samples. Laboratory technicians can also use hematology analyzers to test blood samples.",
     
    },
    {
 
 
      content: "When it comes to your blood analysis, you want the best results every time. That’s why it’s important to choose an expert when it comes to measuring your hematology analyzers. It’s a daunting task, but there are people who possess the know-how to provide the best service possible.",
      content1: "Haematology Reagents are commonly used in hospitals and other health service sector to perform analysis of blood. HAEMATOLOGY analyzer is a machine that tests blood samples from patients and its results are useful in diagnosing various types of diseases. Experts recommend using hematology analyzers for getting reliable result because it gives accurate information about the condition of blood.",
     
    },
 
    {
     
     
     content9:"Haematology analyzers are the diagnostic tools that are used to diagnose a number of illnesses in the body. There are several different types of hemoglobin analyzers available in the market. You should select the most reliable one from them depending on your purpose.",
   
    },
    {
      final: "CPC Diagnostics Pvt Ltd ",
    }
  ],
},
//this is seventh blog
{
  id: 7,
  title: "What is a 3-part differential hematology analyzer",
  admin: "by Mohana Priya ",
  date: "Feb 13, 2023",
  image: blog7,
  content: "Full content of the first blog...",
  sections: [
    {
      startcontent: 'What is a 3-part differential hematology analyzer',
      subcontent: '3-part differential hematology analyzer  which analyzes the complete blood count technology wise. ',
    },
    {

      id: "ha",
      title: "Principle of Measurement ",
      content: "1 . Impedance Principle for RBC/PLT/WBC Differential ",
      content1: "2. Colorimetry method  for HGB.",
     
    },
    {
      id: "hwp",
      title: "What is Impedance principle",
      content: "When  blood cells enter the narrow aperture of electrodes which generates the Signal every  time  when  cell passes through, signals are nothing, but the electrodes generate a resistance within the aperture when the cell pass through it which causes an Impedance and these impedances are transferred as a signal and  count to measure the volume of cells.",
      content1: "Since the WBC lysing agent lyses the Cell membrane of the WBC but not the nucleus, the Monocytes, get into the Mid-cells  along with the Basophil & the Eosinophil.",
      content2: "The Neutrophils, being polymorphous, have multiple nuclei and show up at the largest size in the Histogram.",
    },
   
    {
      id: "hapin",
      title: "Output results in 3-Part Hematology Analyzer parameters are:",
     
      content9: "WBC – Total WBC count , Lymph%/#, Mid %/#, Gran%/#, NLR",
    content1: "RBC – Total RBC count ,HGB, HCT, MCV MCH, MCHC, RDW-CV, RDW-SD, ",
    content2: "PLT – Total Platelet count, MPV, PCT, PDW-CV, PDW-SD, P-LCR, P-LCC, PLR",
    },
    {
      id: "hau",
      title: "Supporting Consumables to run the System",
      content1: "Two reagents + 1 cleaner play important role to run the 3-Part Analyzer, they are ,",
      content2: 'Diluent – To dilute blood samples, to keep the blood cell in original volume also provides appropriate conductivity to the cells.',
      content3: 'Lyse – Lysing Reagents are used to rupture the RBC to measure Hemoglobin, prepare WBC from whole blood to measure the differentials',
      content4: 'Probe Cleaner – To clean the instrument’s probe or tubes. It can also be used for daily maintenance.',
     
    },
    {
      final: "CPC Diagnostics Pvt Ltd ",
    }
  ],
},
//this is eighth blog
{
  id: 8,
  title: "Microalbuminuria",
  admin: "by Priyadharshini C",
  date: "Feb 2, 2023",
  image: blog8,
  content: "Full content of the first blog...",
  sections: [
    {
      startcontent: 'The urinary excretion of albumin greater than or equal to 30mg/day is defined as  Microalbuminuria.',
      content: "In a healthy person, a minimal amount of albumin constitutes the total protein in the urine. However, most of the albumin is reabsorbed in the proximal convoluted tubules of the Kidney. So less than 1 mg/dL of albumin appears in the urine.",
      content1: "Any damages or changes in the Glomerular membrane permeability of the Kidneys, glomerular hypertension and lesser tubular resorption leads to increased protein output in the urine.",
      content2: "The Glomerular Basement Membrane is porous and they are too small to permit the passage of the protein. So, when there is a leak in the glomerular filtration barrier, an increased amount of albumin is secreted into the urine.",
    },
    {

      id: "ha",
      title: "Signs of Microalbuminuria",
      content: "There might be no noticeable signs or symptoms.",
      content1: "When the functioning of the Kidney declines and large amounts of proteins are passing out through the urine – swelling of the hands, feet, abdomen and face (oedema) occurs.",
      content2: "A permanent kidney damage results if the albuminuria progresses further.",
    },
    {
      id: "hwp",
      title: "Microalbumin tests are ordered by the doctor when",
      content: "1. The kidneys are at risk of damage due to cardiovascular disease (CVD)",
      content1: "2.  There is a need to assess the early sign of diabetic nephropathy Microalbuminuria is not specific for CVD and Diabetes.",
      content2: "3.  It may also be associated with some immune disorders, abnormalities in some lipids, vigorous exercise, injuries in lower urinary tract, hematuria, dehydration etc.,",
    },
    {
      id: "hau",
      title: "Diagnosis",
      content3: "Microalbuminuria is diagnosed based on the laboratory urine tests.",
      content4: 'Albumin excretion in the urine is most commonly tested along with creatinine in case of the Kidney function.',
      content5: 'It is very important that we shouldn’t confuse serum albumin test with urine albumin test as the serum albumin test gives different information about potential health problems than the urine albumin tests.',
      content6: 'Immunoturbidimetry and Immunoassay techniques are used to estimate microalbuminuria.',
     
    },
    {
      id: "hapin",
      title: "Everlife CPC’s offering",
     
      content9: "identi immunoturbidimetry microalbumin tests enable better correlation of test results in the diagnosis of microalbuminuria. identi microalbumin reagent ensures better sensitivity, specificity and linearity.",
   

    },
    {
      final: "CPC Diagnostics Pvt Ltd ",
    }
  ],
},
//this is ninth blog
{
  id: 9,
  title: "Allergies",
  admin: "by Dr. Sabitha Palazhy",
  date: "Dec 8, 2022",
  image: blog9,
  content: "Full content of the first blog...",
  sections: [
    {
      startcontent: 'An allergic reaction happens when your body reacts to something that’s normally harmless like pollen, dust or animal fur. Substances that cause allergic reactions are called allergens. Common agents causing allergies include tree/grass pollen, dust mites, certain food items, fur from pets, insect stings, some medicines etc.',
      content: "Symptoms of an allergic reaction can include: a runny nose or sneezing, pain or tenderness around your cheeks, eyes or forehead, coughing, wheezing or breathlessness, itchy skin or a raised rash (hives), diarrhea, feeling or being sick, swollen eyes, lips, mouth or throat etc. A person can experience a combination of the above symptoms also.",
     
    },
    {

      id: "ha",
      title: "Tests to identify the allergen are done in clinics or laboratories.",
      content: "A skin prick or patch test – where a small amount of the allergen is put on your skin to see if it reacts ",
      content1: "Blood tests – to check for allergens that may be causing your symptoms. Everlife CPC offers diagnoses for food allergy, inhalation allergy, allergy panels exclusive for children etc. (Euroline) ",
      content2: "Diet restrictions where you avoid or eat less of a food you are suspected to be allergic to, to see if the symptoms get better.",
      content3: "Once the allergen is identified, the physician would suggest the following to prevent or control allergies.",
      content4: "Avoid contact/consumption of substance/food you’re allergic to whenever possible",
      content5: "Medicines for mild allergic reactions like antihistamines, steroid tablets and steroid creams.",
      content6: "Immunotherapy for severe allergic reactions – this involves carefully exposing you to small doses of the substance you’re allergic to over time, so your body gradually gets desensitized to it and does not react severely to the allergen anymore.",
    },
   
    {
      final: "CPC Diagnostics Pvt Ltd ",
    }
  ],
},
//this is tenth blog
{
  id: 10,
  title: "NOVEL TREATMENT MODALITIES FOR LETHAL DISEASES ​",
  admin: "by Dr. Sabitha Palazhy",
  date: "Dec 6, 2022",
  image: blog10,
  content: "Full content of the first blog...",
  sections: [
    {
      startcontent: 'Early diagnosis of medical conditions helps in better prognosis and outcomes. This is certainly true for diseases that gradually worsen over time and debilitate the patient. Scientists are working round the clock to arrive at new diagnostic and therapeutic possibilities using cutting-edge research for diseases that range from Alzheimer’s to Diabetes.',
      content: 'Given below are a few such innovations that may play a critical role in improving the outcomes and may soon be available in the healthcare market.',
    },
    {

      id: "ha",
      title: "Alzheimer’s",
      content: "A team of researchers have identified the link between progression of Alzheimer’s and deposits of metallic elements such as copper and iron in the brain tissues. The detection of the metallic deposits through MRI will aid in screening and assessing the disease risk among populations at high risk.",
     
    },
    {
      id: "hwp",
      title: "Diabetes",
      content: "Revolutionary stem cell therapy has been initiated using stem cell derived allogeneic cells that could be used to treat type 1 diabetes. This is designed to accelerate the development of next-generation cell therapy products for various other diseases also.",
    },
    {
      id: "hau",
      title: "Cancer and Autoimmune diseases",
      content3: "Antibody treatment is already in use for treating some diseases, such as even Covid-19. Antibody cocktails are being developed for the treatment of patients diagnosed with cancer and serious autoimmune conditions.",
     
    },
    {
      id: "hapin",
      title: "Tuberculosis",
 
      content9: "The bacterial pathogen that causes Tuberculosis thrives on an essential sugar called Trehalose produced by the human body. Research is underway to find if inhibiting Trehalose production in humans can prevent Tuberculosis or obstruct the disease progression.",
   

topic2: 'Malaria',
content11: "Over time, the malarial parasites become resistant to conventional therapy. New drugs are being developed that can optimize the treatment and kill the parasite by administering a single dose.",

    },
   
    {
      final: "CPC Diagnostics Pvt Ltd ",
    }
  ],
},
//this is eleventh blog
{
  id: 11,
  title: "LAB MEAN​",
  admin: "by Dr. Sabitha Palazhy",
  date: "Nov 29, 2022",
  image: blog11,
  content: "Full content of the first blog...",
  sections: [
    {
      startcontent: 'QC results are used to validate whether an instrument is performing within predetermined specifications so that the laboratory can infer that the patient results released are accurate. ',
      content: 'Labs are encouraged to perform two levels of internal QC as a part of their daily quality checking. NABL and US CLIA regulations recommend each laboratory to establish its own lab mean, rather than going by the range provided by the QC manufacturer.',
    },
    {

      id: "ha",
      title: "WHY??",
      content: "Values and limits found on assay sheets often describe the performance observed by a specific method in different laboratories, and may not be applicable to all laboratory conditions and instruments.",
      content1: "The ranges are likely to be too wide/inaccurate for an individual method in the laboratory. If the control limits are too wide, the lab won’t be able to detect problems in its own laboratory.",
     
    },
    {
      id: "hwp",
      title: "HOW??",
      content: "The rule of thumb is to collect at least 20 measurements over at least 2 weeks or 10 working days, and preferably over at least 4 weeks or 20 working days for picking up all possible variations Calculate Mean and Standard Deviation for the data set (more the number of measurements, the better) Calculate the +/- 2SD, add and subtract 2SD to the mean for arriving at the range (Instrument status should be good, and the same technician who is familiar with the instrument should run the test every day)",
    },
   
    {
      final: "CPC Diagnostics Pvt Ltd ",
    }
  ],
},

//this is twelvth blog
{
  id: 12,
  title: "Introduction to Rheumatoid Factor",
  admin: "by Priyadharshini C ",
  date: "Oct 12, 2022",
  image: blog12,
  content: "Full content of the first blog...",
  sections: [
    {
      startcontent: 'Rheumatoid factor (RF) is the auto antibody generated against IgG due to the activation of B cells when the human body is exposed to an antigen. These were first identified in Rheumatoid arthritis and 80% of Rheumatoid arthritis cases are seropositive for RF.',
      content: "Activation of B cells releases anti IgG (Rheumatoid Factor). RF and IgG complex triggers the entire immune system which attracts Leukocytes and stimulates the release of mediators.",
      content1: "Thus resulting in the inflammatory damage to the Synovium, small blood vessels and collagen. Finally joint destruction occurs which is permanent. The presence of RF in the blood indicates an autoimmune disease.",
      content2: "High titre of RF is also observed in certain unrelated diseases such as viral hepatitis, cirrhosis, Sarcoidosis, Lupus, Cancer, Cryoglobulinemia, inflammatory lung disease and Leprosy.",
    },
    {

      id: "ha",
      title: "When does the RF test be ordered?",
      content: "The doctor may order RF tests when they suspect any autoimmune conditions.",
      content1: "When there is symptoms of Rheumatoid arthritis such as",
      content2: "1. Joint stiffness in the morning,",
      content3: "2. Fatigue and joint inflammation,",
      content4: "3. Pain, warmth and swelling etc.",
    },
    {
      id: "hwp",
      title: "Uses of RF test",
      content: "The presence / absence, titres and isotopes have important indications in the diagnosis and prognosis of Rheumatoid arthritis.",
      content1: "Rheumatoid factor level in the serum is useful as a part of making initial diagnosis. But a positive RF test always doesn’t mean that the patient is suffering from Rheumatoid arthritis.",
      content2: "The results of the tests are taken into account and the diagnosis is determined more importantly with the symptoms and clinical examinations.",
      content3: "Some of the assay techniques for quantifying RF are:",
      content4: "1. Immunoturbidimetry assay",
      content5: "2. Nephelometry",
      content6: "3. Latex reaction test",
      content7: "4. Immunoenzymatic test methods ",
    },
   
    {
     
content12: 'Everlife CPC offers identi Rheumatoid factor test kit for quantifying the levels of RF in the serum. The ready to use antisera – high sensitive reagent is compatible with any biochemistry analyzer.',
    },
    {
      final: "CPC Diagnostics Pvt Ltd ",
    }
  ],
},
//this is thirteenth blog
{
  id: 13,
  title: "What makes up a complete lipid profile?",
  admin: "by CPC Expert",
  date: " Sep 12, 2022",
  image: blog13,
  content: "Full content of the first blog...",
  sections: [
    {
      startcontent: 'Lipid profile or Lipid panel is a group of tests that measure the amount of cholesterol and triglycerides in the blood.',
    },
    {

      id: "ha",
      title: "Cholesterol",
      content: "Cholesterol: Cholesterol refers to a type of fat that is synthesized by our liver and also derived from our diet. Cholesterol helps in the proper formation of cell membranes. Cholesterol helps in the synthesis of bile, which in turn helps you digest the fat present in the food. Cholesterol is also needed to make certain hormones and to produce vitamin D. Cholesterol that circulates in the body is carried by the lipoproteins in the blood. These lipoproteins include: ",
     
    },
    {
      id: "hwp",
      title: "Low-density lipoprotein (LDL)",
      content: "Low-density lipoprotein (LDL): LDL is often called “the bad cholesterol.” When your body has too much LDL cholesterol, the LDL cholesterol can build up on the walls of your blood vessels, blocking the arteries and causing a heart attack.",
    },
    {
      id: "hau",
      title: "High-density lipoprotein (HDL)",
      content3: "High-density lipoprotein (HDL): HDL is often called “the good cholesterol” as it absorbs cholesterol from the blood and carries it back to the liver. The liver then flushes it from the body.",
      },
    {
      id: "hapin",
      title: "Very-low-density lipoproteins (VLDL)",
 
      content: "Very-low-density lipoproteins (VLDL): Particles in the blood that carry triglycerides.",
   

topic1: 'Triglycerides',
content10: "Triglycerides: Triglycerides are fats that are derived from the food we eat, and act as a source of immediate energy. Most of the fats, including butter and oils, are in triglyceride form. Excess calories from food are converted into triglycerides and are stored in the fat cells of the body. ",
content11: "High cholesterol usually causes no signs or symptoms. High levels are linked to an increased risk of heart and blood vessel disease, including coronary artery disease, heart attack and death. Reducing LDL levels is a major treatment target for cholesterol-lowering medications. ",
content12: 'A complete cholesterol test is recommended to be done regularly to determine whether your cholesterol is high. Check out the chart on the recommended cholesterol levels and tips on maintaining your cholesterol levels.',
    },
    {
      final: "CPC Diagnostics Pvt Ltd ",
    }
  ],
},
//this is Fourteenth blog
{
  id: 14,
  title: "HEART ATTACK AND CARDIAC BIOMARKERS",
  admin: "by Dr. Sabitha Palazhy",
  date: "Aug 31, 2022",
  image: blog14,
  content: "Full content of the first blog...",
  sections: [
    {
      startcontent: 'A heart attack (myocardial infarction) usually occurs when a blood clot blocks blood flow to the heart. Without blood, tissue loses oxygen and dies. A heart attack is a medical emergency. ',
      content:"The symptoms of a heart attack are as follows.",
      content1:"1. Pain or discomfort in the chest, such as a squeezing sensation or feeling of fullness.",
      content2:"2. Pain in the neck, back, left arm, or jaw",
      content3:"3. Shortness of breath",
      content4:"4.  Light-headedness or dizziness",
      content5:"5. Nausea or vomiting",
      content6:"6. Sudden sweating",
      content7:"7. Tiredness",
      content8:"Cardiac biomarkers include enzymes, proteins and hormones which show up in the blood when the heart is under severe stress or due to lack of proper oxygenation to the heart. These markers are tested to understand the severity of the heart attack or how seriously the heart has been affected. These biomarkers indicate if someone has suffered a heart attack currently or very recently.",
    },
    {

      id: "ha",
      title: "Cardiac troponin",
      content: "Cardiac troponin is a protein and is the most commonly used cardiac biomarker with very high sensitivity. Troponin is released into the bloodstream soon after a heart attack. It also stays in your bloodstream days after all other related biomarkers go back to normal levels. Two forms of troponin may be measured: troponin T and troponin I. Troponin I is highly specific to the heart and stays higher longer than another commonly used biomarker – creatinine kinase-MB. Current guidelines from the American Heart Association (AHA) say Cardiac troponin I is the best biomarker for finding a heart attack.",
     
    },
    {
      id: "hwp",
      title: "Creatinine kinase (CK)",
      content: "This is an enzyme that can also be measured several times over a 24- hour period of a suspected heart attack. It will often at least double if you’ve had a heart attack. But because levels of CK can go up in many other conditions besides a heart attack, it is not a very specific marker for heart attack. Other conditions that contribute to elevated CK levels are kidney failure, trauma due to surgery, inflammation, etc.",
    },
    {
      id: "hau",
      title: "CK-MB",
      content3: "This is a subtype of CK. It is more sensitive to finding heart damage from a heart attack. CK-MB rises 4 to 6 hours after a heart attack. But it is generally back to normal in a day or two. Because of this, it’s not very helpful when a healthcare provider is trying to figure out if your recent chest pain was a heart attack. Also, there is no correlation between the severity of heart attack and CK-MB levels. To help differentiate heart attack from skeletal muscle damage, a CK index can be calculated using CK-MB and total CK as follows: CK index = (CK-MB, ng/mL) x100 / (total CK activity, IU/L). If CK-MB is elevated and the CK index is higher than 2.5 to 3.0, heart damage is likely.",
      },
    {
      id: "hapin",
      title: "Myoglobin",
 
      content: "This is a small protein that stores oxygen. It is seen in the heart and skeletal muscles and is measured occasionally as suggested by the physician. Myoglobin is sometimes measured in addition to troponin to help diagnose a heart attack. It is also not very specific for finding a heart attack. Myoglobin increases in your blood 2 to 3 hours after the first symptoms of muscle damage.",
   


    },
    {
      final: "CPC Diagnostics Pvt Ltd ",
    }
  ],
},
//this is Fifteenth blog
{
  id: 15,
  title: "Blood Disorders-Explained",
  admin: "by Dr. Sabitha Palazhy ",
  date: "Aug 6, 2022",
  image: blog15,
  content: "Full content of the first blog...",
  sections: [
    {
      startcontent: 'Blood disorders occur when the cells in the blood do not function as they should, causing certain symptoms and related issues. The most common blood abnormalities are as follows',
    },
    {

     topic1: "Anemia",
     content9: "People with anemia have a low number of red blood cells. Mild anemia often causes no symptoms. More severe anemia can cause fatigue, pale skin, and shortness of breath with exertion. ",
    },
    {
      topic1: "Thalassemia",
      content9: "This is a genetic form of anemia that affects the body’s ability to produce hemoglobin and red blood cells. These patients may need regular blood transfusions to relieve anemia symptoms.",
    },
    {
      topic1: "Sickle cell anemia",
      content9: "A genetic condition that causes the red blood cells to be sticky and stiff, which obstructs proper blood flow. Severe pain and organ damage can occur.",
    },
    {
      topic1: "Polycythemia vera",
      content9: "The body produces too many red blood cells, from an unknown cause. The excess red blood cells usually create no problems, but may cause blood clots in some people and can turn fatal.",
    },
    {
      topic1: "Lymphoma",
      content9: "A form of blood cancer that develops in the lymph system. In lymphoma, a white blood cell becomes malignant, multiplying and spreading abnormally. Treatment with chemotherapy and/or radiation can often extend life with lymphoma, and sometimes cure it.",
    },
    {
      topic1: "Leukemia",
      content9: "A form of blood cancer in which a white blood cell becomes malignant and multiplies inside bone marrow. Leukemia may be acute (rapid and severe) or chronic (slowly progressing). Chemotherapy and/or stem cell transplantation (bone marrow transplant) can be used to treat leukemia, and may result in a cure.",
    },
    {
      topic1: "Multiple myeloma",
      content9: "A blood cancer in which a white blood cell called a plasma cell becomes malignant. The plasma cells multiply and release damaging substances that eventually cause organ damage. Multiple myeloma has no cure, but stem cell transplant and/or chemotherapy can improve longevity.",
    },
    {
      topic1: "Thrombocytopenia",
      content9: "A low number of platelets in the blood; numerous conditions can cause thrombocytopenia, but most are not severe and do not result in abnormal bleeding.",
    },
    {
      topic1: "Purpura",
      content9: "A condition causing a persistently low number of platelets in the blood, due to an unknown cause; usually, there are no symptoms, yet abnormal bruising, small red spots on the skin, or abnormal bleeding can result.",
    },
    {
      topic1: "Von Willebrand disease",
      content9: "It is an inherited bleeding disorder. People with von Willebrand disease can have heavier-than-normal bleeding after an injury, surgery, menstrual flow and childbirth. In rare cases, this condition can be fatal.",
    },
    {
      topic1: "Hemophilia",
      content9: "Hemophilia is a rare, inherited bleeding disorder in which blood cannot clot normally at the site of a wound or injury. The disorder occurs because certain blood clotting factors are missing or do not work properly. Because a clot does not form, extensive bleeding can be caused from a cut or wound. This is called external bleeding. Bleeding inside the body, called internal bleeding, can occur as well, especially in muscles and in joints like the hips and knees.",
    },
    {
      final: "CPC Diagnostics Pvt Ltd ",
    }
  ],
},
//this is Sixteenth blog
{
  id: 16,
  title: "Risk of Hyperlipidemia in Atherosclerosis?",
  admin: "by Priyadharshini C",
  date: "Jun 20, 2022",
  image: blog16,
  content: "Full content of the first blog...",
  sections: [
    {
      title: "Overview",
      startcontent: 'Dietary lipids are transported inside the body through lipoproteins after getting absorbed by the intestines. Absorbed lipids are utilized for the production of energy, bile formation, or steroid formation. Lipids are insoluble in water and are carried in the blood circulation via carrier proteins called Apo proteins. A high level of lipids in the blood is known as hyperlipidemia.',
      content: "The lab diagnosis is based on measuring lipids levels in the blood. Various lipoproteins are measured using any clinical chemistry analyzer.",
    },
    {

      id: "ha",
      title: "Causes",
      content: "1. The primary causes are genetic or familial.",
      content1: "2. The acquired causes are as follows:",
      content2: "3. A high-fat diet with excess saturated and trans fat",
      content3: "4. Underlying health conditions like kidney disease, liver disease, underactive thyroid, etc.,",
      content4: "5. lifestyle choices like an unbalanced diet, insufficient exercise, smoking, obesity and heavy alcohol use.",
      content5: "6. Some medications",
    },
    {
      id: "hwp",
      title: "Lipoproteins:- What are VLDL, LDL, and HDL?",
      content: "Major fractions of Lipoproteins tested in the blood lipid profile are Cholesterol, Triglycerides, VLDL (very low-density lipoprotein), LDL (Low-density lipoprotein) and HDL (high-density lipoprotein – protective or good cholesterol)",
      content1: "Many studies have demonstrated the harmful effects of a diet containing larger quantities of saturated fats and trans fats that raise the level of blood cholesterol.",
      content2: "The incidences and complications of Atherosclerosis increase with elevated blood lipid levels in an individual. The total cholesterol concentration reflects the total lipoproteins in the blood.",
      content3: "LDL is the richest in cholesterol and has the maximum association with Atherosclerosis compared to other lipoproteins.",
      content4: "Atherosclerosis is characterized by localized fibrous thickening of the arterial wall associated with lipid infiltrated plaques which may eventually calcify. Breaking or rupture of the old plaques initiates the formation of thrombi (blood clots) which eventually obstructs the blood flow.",
      content5: "Obstruction of blood flow leads to common but severe life-threatening diseases of the heart (Myocardial Infarction, Ischemic Heart Disease) and brain (Stroke). It also results in abnormalities of renal blood circulation, insufficiency of blood flow towards the limbs, and dilations of the large arteries.",
      content6: "Knowing the numbers of one’s lipid levels, healthy diet, exercise, and keeping an eye on body weight shall prevent hyperlipidemia.",
    },
    {
      id: "hau",
      title: "Diagnosis",
      content3: "Doctors will use the lipid panel to diagnose hyperlipidemia.",
      content4: '1. Serum Quantification of Cholesterol, Triglycerides, HDL, LDL.',
      content5: '2. Biochemistry analyzers are used to measure the lipids level in the blood. Fully Automated Biochemistry analyzers are reliable with the advantages such as “ease of use”, accuracy and reproducibility.',
      content6: 'Everlife CPC offers identi clinical chemistry lipid profile for the quantification of lipids. The ready-to-use, good end color stable reagents are compatible with any Biochemistry analyzer.',
      },
   
    {
      final: "CPC Diagnostics Pvt Ltd ",
    }
  ],
},
//this is seventeenth blog
{
  id: 17,
  title: "All about Anti- Phospholipid Syndrome",
  admin: "by admin",
  date: "May 9, 2022",
  image: blog17,
  content: "Full content of the first blog...",
  sections: [
 
    {

     topic1: "What is Anti-Phospholipid Syndrome (APS) ?",
    content9: "Anti- Phospholipid syndrome is a rare autoimmune disease during which the body produces antibodies against phospholipids and associated proteins. It increases the risk of thrombotic tendency and pregnancy complications.",
    },
    {
     
      topic1: "APS and its devastation",
     
    },
    {
      topic1: "Symptoms",
      content9: "Increased Vascular occlusions can occur both in veins and arteries. Leg vein thrombosis and lung embolism are the most frequent.",
    },
    {
      topic1: "APS and pregnancy",
      content9: "APS in pregnant women is associated with a significantly higher risk of complications such as spontaneous abortion or premature delivery. APS should be considered in cases of repeated miscarriages without any noticeable cause.",
    },
    {
      id: "hapin",
      title: "Risk factors",
       topic1: "Anti-phospholipid antibodies:",
       content9: "Anti-phospholipid antibodies are a group of heterogeneous antibodies directed against different phospholipids or plasma proteins. Target antigens include cardiolipin and phosphatidylserine, but also proteins such as beta-2-glycoprotein. In suspected anti-phospholipid syndrome, there are mainly three diagnostic classes: antibodies against cardiolipin and beta-2-glycoprotein 1 and lupus anticoagulant.",
    },
    {
      topic1: "Method of Choice:",
      content9 : "ELISA is the method of choice for the detection of APLA, since it is highly sensitive, simple to perform, and does not require fresh plasma. The immunoglobulin classes IgA, IgG, and IgM can be investigated separately or together (IgAGM). Alternatively, lupus anticoagulants can be determined by measuring the extension of the coagulation time. These test systems have high specificity for APS, but they are less sensitive than autoantibody.",
    },
    {
topic1: "Key role of EUROIMMUN Elisa:",
content9: "Medical practitioners and pathologists all over the world prefer EUROIMMUN ELISAs for the determination of autoantibodies against phospholipids primarily for the outstanding features such as:",
content10: "1. High Specificity and Sensitivity.",
content11: "2. Individual availability of all Ig classes recommended by the international consensus statement.",
content12: "3. Flexibility: Manual and automation possible.",

    },
    {
      topic1: "The Diagnostic Strategy:",
      content9: "This diagram would give an easy-to-understand graphical representation of the process:",
      content10: "On this APS Day, let us thank the medical fraternity who are focusing on various research to reduce the severity of the disease and improve the quality of life of patients.",
      content11: "I wish, research should focus on improved drugs which can switch off the harmful signals thereby diminishing the complications in patients and ensuring a better life.",
    },
    {
      topic1: "Dr.Sunitha Shaibu",
      content9 : "Group Product Manager",
      final: "CPC Diagnostics Pvt Ltd ",
    }
  ],
},
//this is Eighteenth blog
{
  id: 18,
  title: "Systemic Sclerosis",
  admin: "by admin ",
  date: "May 9, 2022",
  image: blog18,
  content: "Full content of the first blog...",
  sections: [
    {
      topic1: "Scleroderma – The disease:",
      content9: 'Systemic sclerosis (SSc, scleroderma) is a rare and complex autoimmune disease characterized by fibrosis of the skin and visceral organs. Like many other autoimmune diseases, it also predominantly affects females in the age group of 30 to 50yrs. The prevalence rate of this disease is around 5/100,000 with an incidence of 1/100,000. The etiology is unknown and might be caused by the abnormal immune response. The diseases can bring about changes in the skin, blood vessels, internal organs, and muscles. The chief pathological events involved in its pathogenesis are mainly endothelial damage, fibrosis, and autoimmune dysregulation.',
      content10: "SSc can be classified into different types based on various criteria like the involvement of organs and the presence of autoantibodies. These autoantibodies are disease-specific and usually mutually exclusive and correlate with the extent of skin involvement and associated disease manifestations. The main autoantibodies include anti-SCL 70 (DNA topoisomerase) and anti-centromere antibodies (CENP A and/or B protein).",
      content11: "Image Courtesy: drjockers.com",
      content12: "SSc is divided into diffuse and limited forms based on cutaneous distribution. In the limited form, skin involvement is limited to the distal extremities, while in the diffuse form, the symptoms are diffusely distributed over the trunk, proximal and distal extremities, and the face. The CREST syndrome, with Calcinosis, Raynaud’s syndrome, esophageal dysfunction, sclerodactyly, and telangiectasias is a special form of SSc. Currently, lung involvement is the most common cause of death in these patients.",
    },
    {

      id: "ha",
      title: "Everlife CPC’s Offering:",
      content: "EUROLINE Systemic sclerosis profile is the first membrane-based test system that contains a wide range of SSc-associated antigens. This test allows differentiation of nucleoli antigens observed using the Indirect Immunofluorescence method. The exceptional sensitivity and specificity of the test system allow comprehensive differentiation of SSc-associated antigens with extreme accuracy.",
     
    },
    {
      id: "hwp",
      title: "Benefits of EUROLINE SSc profile:",
      content: "Multiplex approach for confirmation and differentiation of Nucleoli patterns.",
      content1: "The comprehensive spectrum of SSc-associated antigens in one test kit ensures the highest possible detection rate.",
      content2: "Automation through PlexMAT and EUROBlotOne",
      content3: "Easy Manual analysis.",
      content4: "The advent of effective biomarkers can guide clinical diagnosis and result in the better management of this rare difficult disease.",
    },
   
    {
      topic1: "Dr.Sunitha Shaibu",
      content9 : "Group Product Manager",
      final: "CPC Diagnostics Pvt Ltd ",
    }
  ],
},
];

function SingleBlog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { id } = useParams();
  const blog = blogs.find((blog) => blog.id === parseInt(id));

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div className="container-fluid">
      <div className=" mt-10 p-10 text-center">
        <div>
          <h1 className="text-4xl text-maincol font-semibold">{blog.title}</h1>
        </div>

        <div className="flex justify-center items-center mt-10">
          <FaRegUserCircle size={25} color="#02a884" className="mr-4" /> {blog.admin} &nbsp; {blog.date} <br />
          <div className="w-20 bg-maincol h-1 relative top-8 right-32"></div>
        </div>
     
        <div className="mt-14 flex items-center justify-center">
          <img src={blog.image} alt="blog banner " />
        </div>
       

      </div>
      <div className="grid grid-cols-12 p-10 scroll-smooth transition-all ease-in-out">
        <div className="col-span-4 md:block lg:block xl:block hidden">
          <div className="sticky top-24">
            <h2 className="text-maincol font-semibold text-left  text-2xl">
              Share this article
            </h2>
            <div className="flex gap-4 items-center mt-4">
              <a
                href=""
                className="hover:text-maincol hover:scale-110 hover:transition-all hover ease-in-out"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href=""
                className="hover:text-maincol hover:scale-110 hover:transition-all hover ease-in-out"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href=""
                className="hover:text-maincol hover:scale-110 hover:transition-all hover ease-in-out"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href=""
                className="hover:text-maincol hover:scale-110 hover:transition-all hover ease-in-out"
              >
                <FaYoutube size={23} />
              </a>
            </div>

            <div className="mt-8 ">
              {blog.sections.map((section) => (
                <div key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="mt-4 hover:text-maincol hover:scale-110 hover:transition-all hover ease-in-out"
                  >
                  <span className="text-fontptag">  {section.title}</span>
                  </a>{" "}
                  <br />
                  <br />
                  </div>
              ))}
            </div>
          </div>
        </div>

        <div className="md:col-span-8 lg:col-span-8 xl:col-span-8 col-span-12 text-justify leading-8">
          {blog.sections.map((section) => (
            <div key={section.id} id={section.id}>
              <p className="text-fontextra">{section.startcontent}</p>
              <p className="text-fontextra">{section.subcontent}</p>
              <h2 className="text-2xl text-maincol font-semibold mt-10">
                {section.title}
              </h2>
              <p className="mt-4 text-fontextra">{section.content}</p>
              <p className="mt-4 text-fontextra">{section.content1}</p>
              <p className="mt-4 text-fontextra">{section.content2}</p>
              <p className="mt-4 text-fontextra">{section.content3}</p>
              <p className="mt-4 text-fontextra">{section.content4}</p>
              <p className="mt-4 text-fontextra">{section.content5}</p>
              <p className="mt-4 text-fontextra">{section.content6}</p>
              <p className="mt-4 text-fontextra">{section.content7}</p>
              <p className="mt-4 text-fontextra">{section.content8}</p>
              <h2 className="mt-4 text-xl text-black text-left">{section.topic1}</h2>
              <p className="mt-4 text-fontextra">{section.content9}</p>
              <p className="mt-4 text-fontextra">{section.content10}</p>
              <h2 className="mt-4 text-xl text-black text-left">{section.topic2}</h2>
              <p className="mt-4 text-fontextra">{section.content11}</p>
              <p className="mt-4 text-fontextra"> {section.content12}</p>
              <p className="mt-4 text-fontextra"> {section.final}</p>
             
            </div>
 
          ))}
        </div>
     

     
      </div>
     <Footer/>
    </div>
   
  );
 
}

export default SingleBlog;