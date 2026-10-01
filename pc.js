/* =====================================================
   MUFI PC BUILDER
===================================================== */


/* DAFTAR KOMPONEN */

const components = [

    {
        id: "processor",
        name: "Processor"
    },

    {
        id: "motherboard",
        name: "Motherboard"
    },

    {
        id: "ram",
        name: "RAM"
    },

    {
        id: "gpu",
        name: "GPU"
    },

    {
        id: "ssd",
        name: "SSD"
    },

    {
        id: "psu",
        name: "Power Supply"
    },

    {
        id: "case",
        name: "PC Case"
    }

];


/* FORMAT RUPIAH */

function formatRupiah(number) {

    return new Intl.NumberFormat(
        "id-ID",
        {
            style: "currency",
            currency: "IDR",
            maximumFractionDigits: 0
        }
    ).format(number);

}


/* UPDATE BUILDER */

function updateBuilder() {

    let total = 0;

    let count = 0;

    const summaryList =
        document.getElementById("summaryList");


    summaryList.innerHTML = "";


    components.forEach(function(component) {

        const select =
            document.getElementById(component.id);


        const value =
            Number(select.value);


        if (value > 0) {

            total += value;

            count++;


            const selectedText =
                select.options[
                    select.selectedIndex
                ].text;


            const item =
                document.createElement("div");


            item.className =
                "summary-item";


            item.innerHTML = `

                <span>
                    ${component.name}
                </span>

                <strong>
                    ${selectedText}
                </strong>

            `;


            summaryList.appendChild(item);

        }

    });


    if (count === 0) {

        summaryList.innerHTML = `

            <div class="empty-summary">

                🖥️

                <p>
                    Belum ada komponen dipilih
                </p>

            </div>

        `;

    }


    document.getElementById(
        "totalPrice"
    ).textContent =
        formatRupiah(total);


    document.getElementById(
        "componentCount"
    ).textContent =
        count + "/7";

}


/* PASANG EVENT */

components.forEach(function(component) {

    document
        .getElementById(component.id)
        .addEventListener(
            "change",
            updateBuilder
        );

});


/* BUILD PC */

function buildPC() {

    let total = 0;

    let count = 0;


    components.forEach(function(component) {

        const value =
            Number(
                document.getElementById(
                    component.id
                ).value
            );


        if (value > 0) {

            total += value;

            count++;

        }

    });


    if (count < 7) {

        alert(
            "Silakan pilih semua 7 komponen terlebih dahulu!"
        );

        return;

    }


    document.getElementById(
        "modalPrice"
    ).textContent =
        formatRupiah(total);


    document.getElementById(
        "successModal"
    ).classList.add("show");

}


/* RESET */

function resetBuild() {

    components.forEach(function(component) {

        document.getElementById(
            component.id
        ).value = "0";

    });


    updateBuilder();

}


/* TUTUP MODAL */

function closeModal() {

    document.getElementById(
        "successModal"
    ).classList.remove("show");

}


/* SCROLL BUILDER */

function scrollToBuilder() {

    document.getElementById(
        "builder"
    ).scrollIntoView({
        behavior: "smooth"
    });

}


/* SCROLL SUMMARY */

function scrollToSummary() {

    document.getElementById(
        "summary"
    ).scrollIntoView({
        behavior: "smooth"
    });

}


/* JALANKAN SAAT AWAL */

updateBuilder();