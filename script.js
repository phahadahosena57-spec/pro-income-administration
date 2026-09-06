const admins = [

  {
    id: "PIA-001",
    name: "Emran Khan",
    position: "Founder / Owner",
    telegram: "@Emran11211"
  },

  {
    id: "PIA-002",
    name: "Fire 2X™ RAKIBUL",
    position: "Chief Administrator",
    telegram: "@Rakibul04566"
  },

  {
    id: "PIA-003",
    name: "MR EMON KAHAN",
    position: "Senior Administrator",
    telegram: "@NFTEmon12"
  },

  {
    id: "PIA-004",
    name: "Fire 2X™ JIBON VAI CEO",
    position: "Senior Leader",
    telegram: "@dh_jibon_2x_team"
  },

  {
    id: "PIA-005",
    name: "HASIM Rock™ LEADER",
    position: "Senior Leader",
    telegram: "@POWER_METAPROO"
  },

  {
    id: "PIA-006",
    name: "PRINSESS MASUMA",
    position: "Senior Leader",
    telegram: "@princessmasuma22"
  },

  {
    id: "PIA-007",
    name: "ANANNA API",
    position: "Senior Leader",
    telegram: "@Tumago_Queen_Apa_1"
  },

  {
    id: "PIA-008",
    name: "ASHRAFUL ALAM",
    position: "Senior Leader",
    telegram: "@princeashraful33"
  },

  {
    id: "PIA-009",
    name: "AHEAD VIA",
    position: "Junior Leader",
    telegram: "@Aheadvia1298"
  },

  {
    id: "PIA-010",
    name: "Fire 2X™ TUSHAF VAI",
    position: "Leader",
    telegram: ""
  }

];


const adminGrid =
  document.getElementById("adminGrid");

const search =
  document.getElementById("adminSearch");


function getInitials(name){

  return name
    .replace(/™/g,"")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0,2)
    .map(word => word[0])
    .join("")
    .toUpperCase();

}


function createAdminCard(admin){

  let telegramButton = "";

  if(admin.telegram){

    const username =
      admin.telegram.replace("@","");

    telegramButton = `
      <a
        class="telegram"
        target="_blank"
        href="https://t.me/${username}">
        ✈ ${admin.telegram}
      </a>
    `;

  }else{

    telegramButton = `
      <span class="telegram">
        Telegram username coming soon
      </span>
    `;

  }


  return `

    <article class="admin-card">

      <div class="avatar">
        ${getInitials(admin.name)}
      </div>

      <div>

        <div class="admin-position">
          ${admin.position}
        </div>

        <h3>
          ${admin.name}
        </h3>

        <p>
          ${admin.id}
        </p>

        ${telegramButton}

      </div>

    </article>

  `;

}


function renderAdmins(list){

  if(list.length === 0){

    adminGrid.innerHTML = `

      <article class="admin-card">

        <div>

          <h3>
            No Admin Found
          </h3>

          <p>
            Try another PIA ID, name,
            position or Telegram username.
          </p>

        </div>

      </article>

    `;

    return;

  }


  adminGrid.innerHTML =
    list.map(createAdminCard).join("");

}


search.addEventListener("input", function(){

  const query =
    this.value
      .toLowerCase()
      .trim();


  const filtered =
    admins.filter(admin =>

      `${admin.id}
       ${admin.name}
       ${admin.position}
       ${admin.telegram}`
      .toLowerCase()
      .includes(query)

    );


  renderAdmins(filtered);

});


renderAdmins(admins);
