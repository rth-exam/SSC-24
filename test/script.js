const activationCodes = {
  Maruf: {
    code: 'MAR-1892' ,
    redirectURL: 'https://rth-result.rf.gd/',
  },
  Rana_SIR : {
    code: 'RAN-B9B4',
    redirectURL: 'https://rth-result.rf.gd/wp-admin/'
  },
  Rashedur_Zaman : {
    code : 'RAS-AE3E',
    redirectURL: 'https://rth-result.rf.gd/wp-admin/'
  },
  Tamim_Casc: {
    code: 'TAM-719G',
    redirectURL: 'https://rth-result.rf.gd/' 
  },
  Tamim_BAFSD: {
    code: 'TAM-IH6D',
    redirectURL: 'https://rth-result.rf.gd/'
  },
  Bandhon: {
    code: 'BAN-63C7',
    redirectURL: 'https://rth-result.rf.gd/'
  },
  Maisha: {
    code: 'MAI-4923' ,
    redirectURL: 'https://rth-result.rf.gd/',
  },
  Eva: {
    code: 'EVA-A2DG' ,
    redirectURL: 'https://rth-result.rf.gd/',
  },
  Adnan: {
    code: 'ADN-3GC1' ,
    redirectURL: 'https://rth-result.rf.gd/',
  },
  Shahadat: {
    code: 'SHA-DFF4' ,
    redirectURL: 'https://rth-result.rf.gd/',
  },
  Rakibul: {
    code: 'RAK-245B' ,
    redirectURL: 'https://rth-result.rf.gd/',
  },
  Farzana_Akhter: {
    code: 'FAR-477H' ,
    redirectURL: 'https://rth-result.rf.gd/',
  },
  Bindhu: {
    code: 'BIN-11DA' ,
    redirectURL: 'https://rth-result.rf.gd/',
  },
  Morium: {
    code: 'MOR-B982' ,
    redirectURL: 'https://rth-result.rf.gd/',
  },
  Soniya: {
    code: 'SON-B441' ,
    redirectURL: 'https://rth-result.rf.gd/',
  },
  Razin: {
    code: 'RAZ-BAA8' ,
    redirectURL: 'https://rth-result.rf.gd/',
  },
  Hosam_Ahsan: {
    code: 'HOS-CIEE' ,
    redirectURL: 'https://rth-result.rf.gd/',
  },
  Ashraful: {
    code: 'ASH-AEHD' ,
    redirectURL: 'https://rth-result.rf.gd/',
  },
  Tanha_Tamanna: {
    code: 'TAN-DEF1' ,
    redirectURL: 'https://rth-result.rf.gd/',
  },
  Takif: {
    code: 'TAK-8B61' ,
    redirectURL: 'https://rth-result.rf.gd/',
  },
  Shuvo: {
    code: 'SHU-3HDB' ,
    redirectURL: 'https://rth-result.rf.gd/',
  },
  Yeasir_Leon: {
    code: 'YEA-34GC' ,
    redirectURL: 'https://rth-result.rf.gd/',
  },
  Digonto: {
    code: 'DIG-IFH2' ,
    redirectURL: 'https://rth-result.rf.gd/',
  },
  Dhoni: {
    code: 'DHO-74F3' ,
    redirectURL: 'https://rth-result.rf.gd/',
  },
  Nafiza: {
    code: 'NAF-D37B' ,
    redirectURL: 'https://rth-result.rf.gd/',
  },
  Niha: {
    code: 'NIH-A85G' ,
    redirectURL: 'https://rth-result.rf.gd/',
  },
  Jamil: {
    code: 'JAM-8HA1' ,
    redirectURL: 'https://rth-result.rf.gd/',
  },
  Puja: {
    code: 'PUJ-E288' ,
    redirectURL: 'https://rth-result.rf.gd/',
  },
  Tasnim: {
    code: 'TAS-C6I1' ,
    redirectURL: 'https://rth-result.rf.gd/',
  },
  // Add more users and their respective activation codes and URLs here
  // 
};

document.getElementById('activationForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  const enteredCode = document.getElementById('activationInput').value;

  // Check entered code against the activation codes for different users
  for (const user in activationCodes) {
    if (activationCodes.hasOwnProperty(user)) {
      if (enteredCode === activationCodes[user].code) {
        const greeting = document.getElementById('greeting');
        greeting.textContent = `Activation successful for ${user}! Redirecting...`;

        // Redirect to the user's specified website after 2 seconds (2000 milliseconds)
        setTimeout(function() {
          window.location.href = activationCodes[user].redirectURL;
        }, 2000); // Change the delay time as needed
        return; // Exit the loop if activation code is found
      }
    }
  }

  // If no valid activation code is entered
  alert('Invalid activation code! Please try again.It means You are not allowed to go to RTH Exam WebApp       ---Rashedur Zaman  (Admin, RTH Web Developing Team)');
});