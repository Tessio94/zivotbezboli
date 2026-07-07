"use client";

import Script from "next/script";


const page = () => {
  return (
    <div className="relative z-10 w-full">
      <div className="sm:px-10 lg:px-18 px-6 pb-20 pt-[244px] bg-theme4">
        <div className="flex flex-col items-start lg:flex-row gap-10 lg:gap-20 xl:gap-30 justify-between">
          <h2 className="text-slate-100 font-semibold text-4xl sm:text-6xl">Rezervacija termina</h2>
          <p className="text-slate-100 text-xl sm:text-2xl font-medium">U nastavku se nalazi sustav za online rezervaciju termina. Slijedite prikazane upute i u nekoliko jednostavnih koraka odaberite termin koji vam najbolje odgovara.</p>
        </div>
      </div>
      <>
        <iframe
          id="cliniko-61788811"
          src="https://zivot-bez-boli.eu1.cliniko.com/bookings?embedded=true"
          width="100%"
          height="1000"
          style={{ pointerEvents: 'auto' }}
          allow="payment"
        />

        <Script id="cliniko-script" strategy="afterInteractive" type="text/javascript">
          {`
            window.addEventListener('message', function handleIFrameMessage(e) {
              var clinikoBookings = document.getElementById('cliniko-61788811');

              if (typeof e.data !== 'string') return;

              if (e.data.search('cliniko-bookings-resize') > -1) {
                var height = Number(e.data.split(':')[1]);
                clinikoBookings.style.height = height + 'px';
              }

              if (e.data.search('cliniko-bookings-page') > -1 && clinikoBookings) {
                clinikoBookings.scrollIntoView();
              }
            });
          `}
        </Script>
      </>
    </div>
  );
};

export default page;
