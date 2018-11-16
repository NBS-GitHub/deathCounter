(function(){
   
   // Grabbing elements
   let countDisplay = document.querySelector('.count p'),
         countryDisplay = document.querySelector('.place'),
         sexDisplay = document.querySelector('.sex'),
         causeDisplay = document.querySelector('.cause');
         
   
   // Variables declarations
   const deathsPerDay = 151600, //151600
         deathsPerSecond = deathsPerDay / 86400;
   let deathCounter = 0,
       deathInterval = 1 / deathsPerSecond * 1000;
   let populationSum = 0;
   let currentPopulation = 0;
   let infoIndicator = 0;
   const deathCauses = ['Coronary Heart Disease', 'Stroke', 'Influenza or Pneumonia', 'Lung Disease', 'Lung Cancer', 'Diabetes Mellitus', 'Alzheimer/Dementia', 'Diarrhoeal disease', 'Tuberculosis', 'Road Traffic Accident', 'Liver Disease', 'Kidney Disease', 'HIV/AIDS', 'Low Birth Weight', 'Hypertension', 'Suicide', 'Liver Cancer', 'Colon-Rectum Cancer', 'Stomach Cancer', 'Birth Trauma', 'Other Injury', 'Congenital Anomaly', 'Fall', 'Breast Cancer', 'Violence', 'Malaria', 'Oesophagus Cancer', 'Inflammatory/Heart', 'Endocrine Disorders', 'Asthma', 'Drowning', 'Pancreas Cancer', 'Prostate Cancer'];
   const countries = [
   ['China', 18.54],
   ['India', 17.74],
   ['USA', 4.28],
   ['Indonesia', 3.50],
   ['Brazil', 2.76],
   ['Pakistan', 2.63],
   ['Nigeria', 2.57],
   ['Bangladesh', 2.18],
   ['Russia', 1.89],
   ['Mexico', 1.71],
   ['Japan', 1.67],
   ['Ethiopia', 1.41],
   ['Philippines', 1.40],
   ['Egypt', 1.30],
   ['Viet Nam', 1.26],
   ['DR Congo', 1.10],
   ['Germany', 1.08],
   ['Iran', 1.07],
   ['Turkey', 1.07],
   ['Thailan', 0.9],
      ['UK', 0.87],
      ['France', 0.85],
      ['Italy', 0.78],
      ['Tanzania', 0.77],
      ['South Africa', 0.75],
      ['Myanmar', 0.71],
      ['South Korea', 0.67],
      ['Kenya', 0.67],
      ['Colombia', 0.65],
      ['Spain', 0.61],
      ['Argentina', 0.59],
      ['Uganda', 0.58],
      ['Ukraine', 0.58],
      ['Algeria', 0.55],
      ['Sudan', 0.54],
      ['Iraq', 0.52],
      ['Poland', 0.50],
      ['Canada', 0.48],
      ['Afghanistan', 0.48],
      ['Morocco', 0.47],
      ['Saudi Arabia', 0.44],
      ['Peru', 0.43],
      ['Venezuela', 0.42],
      ['Uzbekistan', 0.42],
      ['Malaysia', 0.42],
      ['Angola', 0.40],
      ['Mozambique', 0.40],
      ['Nepal', 0.39],
      ['Ghana', 0.39],
      ['Yemen', 0.38],
      ['Madagascar', 0.34],
      ['North Korea', 0.34],
      ['Côte d\'Ivoire', 0.33],
      ['Australia', 0.32],
      ['Cameroon', 0.32]
         ];

   // countDeaths() i.e. main function
   function countDeaths(){
      
      // This incrementation indicates, which .info to be grabbed
      infoIndicator++;
      
      // Actualisation of the array named: countries
      for(i=0; i<countries.length; i++) {
   currentPopulation = countries[i][1];
   populationSum += currentPopulation;
   populationSum = populationSum.toFixed(2);
   populationSum = String(populationSum);
   countries[i].push(populationSum);
   countries[i].push(Number(populationSum.split('.').join('')));
   populationSum = Number(populationSum);
   }
      
      // These variable and the following switch decide, which country to display.
      let countryBase = Math.floor(Math.random()*10000) + 1;
      
      //
      countryDisplay = document.querySelector('.info' + infoIndicator + ' .place');
      
      // Look at the previous comment.
      switch (true) {
   case countryBase<=countries[0][3]:
      countryDisplay.innerHTML = countries[0][0];
      break;
   case countryBase<=countries[1][3]:
      countryDisplay.innerHTML = countries[1][0];
      break;
   case countryBase<=countries[2][3]:
      countryDisplay.innerHTML = countries[2][0];
      break;
   case countryBase<=countries[3][3]:
      countryDisplay.innerHTML = countries[3][0];
      break;
   case countryBase<=countries[4][3]:
      countryDisplay.innerHTML = countries[4][0];
      break;
   case countryBase<=countries[5][3]:
      countryDisplay.innerHTML = countries[5][0];
      break;
   case countryBase<=countries[6][3]:
      countryDisplay.innerHTML = countries[6][0];
      break;
   case countryBase<=countries[7][3]:
      countryDisplay.innerHTML = countries[7][0];
      break;
   case countryBase<=countries[8][3]:
      countryDisplay.innerHTML = countries[8][0];
      break;
   case countryBase<=countries[9][3]:
      countryDisplay.innerHTML = countries[9][0];
      break;
   case countryBase<=countries[10][3]:
      countryDisplay.innerHTML = countries[10][0];
      break;
   case countryBase<=countries[11][3]:
      countryDisplay.innerHTML = countries[11][0];
      break;
   case countryBase<=countries[12][3]:
      countryDisplay.innerHTML = countries[12][0];
      break;
   case countryBase<=countries[13][3]:
      countryDisplay.innerHTML = countries[13][0];
      break;
   case countryBase<=countries[14][3]:
      countryDisplay.innerHTML = countries[14][0];
      break;
   case countryBase<=countries[15][3]:
      countryDisplay.innerHTML = countries[15][0];
      break;
   case countryBase<=countries[16][3]:
      countryDisplay.innerHTML = countries[16][0];
      break;
   case countryBase<=countries[17][3]:
      countryDisplay.innerHTML = countries[17][0];
      break;
   case countryBase<=countries[18][3]:
      countryDisplay.innerHTML = countries[18][0];
      break;
   case countryBase<=countries[19][3]:
      countryDisplay.innerHTML = countries[19][0];
      break;
   case countryBase<=countries[20][3]:
      countryDisplay.innerHTML = countries[20][0];
      break;
   case countryBase<=countries[21][3]:
      countryDisplay.innerHTML = countries[21][0];
      break;
   case countryBase<=countries[22][3]:
      countryDisplay.innerHTML = countries[22][0];
      break;
   case countryBase<=countries[23][3]:
      countryDisplay.innerHTML = countries[23][0];
      break;
   case countryBase<=countries[24][3]:
      countryDisplay.innerHTML = countries[24][0];
      break;
   case countryBase<=countries[25][3]:
      countryDisplay.innerHTML = countries[25][0];
      break;
   case countryBase<=countries[26][3]:
      countryDisplay.innerHTML = countries[26][0];
      break;
   case countryBase<=countries[27][3]:
      countryDisplay.innerHTML = countries[27][0];
      break;
   case countryBase<=countries[28][3]:
      countryDisplay.innerHTML = countries[28][0];
      break;
   case countryBase<=countries[29][3]:
      countryDisplay.innerHTML = countries[29][0];
      break;
   case countryBase<=countries[30][3]:
      countryDisplay.innerHTML = countries[30][0];
      break;
   case countryBase<=countries[31][3]:
      countryDisplay.innerHTML = countries[31][0];
      break;
   case countryBase<=countries[32][3]:
      countryDisplay.innerHTML = countries[32][0];
      break;
   case countryBase<=countries[33][3]:
      countryDisplay.innerHTML = countries[33][0];
      break;
   case countryBase<=countries[34][3]:
      countryDisplay.innerHTML = countries[34][0];
      break;
   case countryBase<=countries[35][3]:
      countryDisplay.innerHTML = countries[35][0];
      break;
   case countryBase<=countries[36][3]:
      countryDisplay.innerHTML = countries[36][0];
      break;
   case countryBase<=countries[37][3]:
      countryDisplay.innerHTML = countries[37][0];
      break;
   case countryBase<=countries[38][3]:
      countryDisplay.innerHTML = countries[38][0];
      break;
   case countryBase<=countries[39][3]:
      countryDisplay.innerHTML = countries[39][0];
      break;
   case countryBase<=countries[40][3]:
      countryDisplay.innerHTML = countries[40][0];
      break;
   case countryBase<=countries[41][3]:
      countryDisplay.innerHTML = countries[41][0];
      break;
   case countryBase<=countries[42][3]:
      countryDisplay.innerHTML = countries[42][0];
      break;
   case countryBase<=countries[43][3]:
      countryDisplay.innerHTML = countries[43][0];
      break;
   case countryBase<=countries[44][3]:
      countryDisplay.innerHTML = countries[44][0];
      break;
   case countryBase<=countries[45][3]:
      countryDisplay.innerHTML = countries[45][0];
      break;
   case countryBase<=countries[46][3]:
      countryDisplay.innerHTML = countries[46][0];
      break;
   case countryBase<=countries[47][3]:
      countryDisplay.innerHTML = countries[47][0];
      break;
   case countryBase<=countries[48][3]:
      countryDisplay.innerHTML = countries[48][0];
      break;
   case countryBase<=countries[49][3]:
      countryDisplay.innerHTML = countries[49][0];
      break;
   case countryBase<=countries[50][3]:
      countryDisplay.innerHTML = countries[50][0];
      break;
   case countryBase<=countries[51][3]:
      countryDisplay.innerHTML = countries[51][0];
      break;
   case countryBase<=countries[52][3]:
      countryDisplay.innerHTML = countries[52][0];
      break;
   case countryBase<=countries[53][3]:
      countryDisplay.innerHTML = countries[53][0];
      break;
   case countryBase<=countries[54][3]:
      countryDisplay.innerHTML = countries[54][0];
      break;       
}
      
      // These variable and the following if-statement decide, which sex to display.
      let sexBase = Math.floor(Math.random()*10000) + 1;
      
      // sexDisplay actualization
      sexDisplay = document.querySelector('.info' + infoIndicator + ' .sex');
      
      // Look at the previous comment.
      if (sexBase<5000) {
         sexDisplay.innerHTML = 'man';
      } else {
         sexDisplay.innerHTML = 'woman';
      }
      
      // These variable and the following switch decide, which index of [deathCauses] to display.
      let diseaseBase = Math.floor(Math.random()*10000) + 1;
      
      //
      causeDisplay = document.querySelector('.info' + infoIndicator + ' .cause');
      
      // Look at the previous comment.
      switch (true) {
         case diseaseBase<1573: {
            causeDisplay.innerHTML = deathCauses[0];
            break;
         }
         case diseaseBase<2694: {
            causeDisplay.innerHTML = deathCauses[1];
            break;
         }
         case diseaseBase<3267: {
            causeDisplay.innerHTML = deathCauses[2];
            break;
         }
         case diseaseBase<3837: {
            causeDisplay.innerHTML = deathCauses[3];
            break;
         }
         case diseaseBase<4141: {
            causeDisplay.innerHTML = deathCauses[4];
            break;
         }
         case diseaseBase<4424: {
            causeDisplay.innerHTML = deathCauses[5];
            break;
         }
         case diseaseBase<4700: {
            causeDisplay.innerHTML = deathCauses[6];
            break;
         }
         case diseaseBase<4950: {
            causeDisplay.innerHTML = deathCauses[7];
            break;
         }
         case diseaseBase<5197: {
            causeDisplay.innerHTML = deathCauses[8];
            break;
         }
         case diseaseBase<5438: {
            causeDisplay.innerHTML = deathCauses[9];
            break;
         }
         case diseaseBase<5646: {
            causeDisplay.innerHTML = deathCauses[10];
            break;
         }
         case diseaseBase<5848: {
            causeDisplay.innerHTML = deathCauses[11];
            break;
         }
         case diseaseBase<6039: {
            causeDisplay.innerHTML = deathCauses[12];
            break;
         }
         case diseaseBase<6230: {
            causeDisplay.innerHTML = deathCauses[13];
            break;
         }
         case diseaseBase<6399: {
            causeDisplay.innerHTML = deathCauses[14];
            break;
         }
         case diseaseBase<6540: {
            causeDisplay.innerHTML = deathCauses[15];
            break;
         }
         case diseaseBase<6680: {
            causeDisplay.innerHTML = deathCauses[16];
            break;
         }
         case diseaseBase<6818: {
            causeDisplay.innerHTML = deathCauses[17];
            break;
         }
         case diseaseBase<6953: {
            causeDisplay.innerHTML = deathCauses[18];
            break;
         }
         case diseaseBase<7078: {
            causeDisplay.innerHTML = deathCauses[19];
            break;
         }
         case diseaseBase<7199: {
            causeDisplay.innerHTML = deathCauses[20];
            break;
         }
         case diseaseBase<7315: {
            causeDisplay.innerHTML = deathCauses[21];
            break;
         }
         case diseaseBase<7431: {
            causeDisplay.innerHTML = deathCauses[22];
            break;
         }
         case diseaseBase<7533: {
            causeDisplay.innerHTML = deathCauses[23];
            break;
         }
         case diseaseBase<7617: {
            causeDisplay.innerHTML = deathCauses[24];
            break;
         }
         case diseaseBase<7696: {
            causeDisplay.innerHTML = deathCauses[25];
            break;
         }
         case diseaseBase<7770: {
            causeDisplay.innerHTML = deathCauses[26];
            break;
         }
         case diseaseBase<7844: {
            causeDisplay.innerHTML = deathCauses[27];
            break;
         }
         case diseaseBase<7918: {
            causeDisplay.innerHTML = deathCauses[28];
            break;
         }
         case diseaseBase<7987: {
            causeDisplay.innerHTML = deathCauses[29];
            break;
         }
         case diseaseBase<8052: {
            causeDisplay.innerHTML = deathCauses[30];
            break;
         }
         case diseaseBase<8116: {
            causeDisplay.innerHTML = deathCauses[31];
            break;
         }
         case diseaseBase<8178: {
            causeDisplay.innerHTML = deathCauses[32];
            break;
         }
         default: {
            causeDisplay.innerHTML = 'Other cause';
         }
      }
      
      // If the desease is 'Breast cancer', it is a woman.
      if (causeDisplay.innerHTML === deathCauses[23]) {
         sexDisplay.innerHTML = 'woman';
      }
      
      // If the desease is 'Prostate cancer', it is a man.
      if (causeDisplay.innerHTML === deathCauses[32]) {
         sexDisplay.innerHTML = 'man';
      }
      
      // Check of infoIndicator
      infoIndicator>5 ? infoIndicator=0 : infoIndicator=infoIndicator;
      
      
      // deathCounter incrementation and display
      deathCounter++;
      countDisplay.innerHTML = deathCounter;
   } // End of countDeaths()

   
   
   // countDeaths() repeater
   setInterval(countDeaths, deathInterval);
   
})() // End of the main IIFE