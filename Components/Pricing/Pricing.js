// prices
var windows10 = document.querySelector("#windows10"),
    windowsServer = document.querySelector("#windowsServer"),
    debian = document.querySelector("#debian"),
    ubuntu = document.querySelector("#ubuntu"),
    centos = document.querySelector("#centos"),
    freebsd = document.querySelector("#freebsd"),
    custom = document.querySelector("#custom"),
    standart = document.querySelector("#standart"),
    days7 = document.querySelector("#days7"),
    days14 = document.querySelector("#days14"),
    days30 = document.querySelector("#days30"),
    basic = document.querySelector("#basic"),
    advanced = document.querySelector("#advanced");
//

// selects
var osSelect = document.querySelector("#osSelect");
backupSelect = document.querySelector("#backupSelect"), supportSelect = document.querySelector("#supportSelect");
//

// functios - display: none
function setOSDisplayNone() {
    windows10.style.display = "none";
    windowsServer.style.display = "none";
    debian.style.display = "none";
    ubuntu.style.display = "none";
    centos.style.display = "none";
    freebsd.style.display = "none";
    custom.style.display = "none";
}

function setBackupDisplayNone() {
    standart.style.display = "none";
    days7.style.display = "none";
    days14.style.display = "none";
    days30.style.display = "none";
}

function setSupportDisplayNone() {
    basic.style.display = "none";
    advanced.style.display = "none";
}
//

// OS is Selected
function OSIsSelected() {
    var osSelected = osSelect.options[osSelect.selectedIndex].value;
    if (osSelected === "windows10") {
        setOSDisplayNone();
        windows10.style.display = "block";
    }

    if (osSelected === "windowsServer") {
        setOSDisplayNone();
        windowsServer.style.display = "block";
    }

    if (osSelected === "debian") {
        setOSDisplayNone();
        debian.style.display = "block";
    }

    if (osSelected === "ubuntu") {
        setOSDisplayNone();
        ubuntu.style.display = "block";
    }

    if (osSelected === "centos") {
        setOSDisplayNone();
        centos.style.display = "block";
    }

    if (osSelected === "freebsd") {
        setOSDisplayNone();
        freebsd.style.display = "block";
    }

    if (osSelected === "custom") {
        setOSDisplayNone();
        custom.style.display = "block";
    }
}

function BackupIsSelected() {
    var backupSelected = backupSelect.options[backupSelect.selectedIndex].value;
    if (backupSelected === "standart") {
        setBackupDisplayNone();
        standart.style.display = "block";
    }

    if (backupSelected === "days7") {
        setBackupDisplayNone();
        days7.style.display = "block";
    }

    if (backupSelected === "days14") {
        setBackupDisplayNone();
        days14.style.display = "block";
    }

    if (backupSelected === "days30") {
        setBackupDisplayNone();
        days30.style.display = "block";
    }
}

function SupportIsSelected() {
    var supportSelected = supportSelect.options[supportSelect.selectedIndex].value;
    if (supportSelected === "basic") {
        setSupportDisplayNone();
        basic.style.display = "block";
    }

    if (supportSelected === "advanced") {
        setSupportDisplayNone();
        advanced.style.display = "block";
    }
}

osSelect.addEventListener("change", OSIsSelected);
backupSelect.addEventListener("change", BackupIsSelected);
supportSelect.addEventListener("change", SupportIsSelected);

//