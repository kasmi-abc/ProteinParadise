"use client"
import { useI18n } from "@/i18n/LanguageProvider"
import { IconMapPin, IconInstagram, IconFacebook } from "@/components/Icons"

const MAPS_URL = "https://www.google.com/maps/place/Protein+Paradise/@35.3079294,-1.1349514,687m/data=!3m2!1e3!4b1!4m6!3m5!1s0xd7ed100300fcbc5:0xb948326faa43b34c!8m2!3d35.3079294!4d-1.1349514!16s%2Fg%2F11y32mbf9z?entry=ttu&g_ep=EgoyMDI2MDkyMy4wIKXMDSoASAFQAw%3D%3D"
const INSTAGRAM_URL = "https://www.instagram.com/protein.paradise46/"
const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61556498130437&ref=PROFILE_EDIT_xav_ig_profile_page_web#"

export function StoreLocation() {
  const { t, d } = useI18n()
  return (
    <section id="location" className="bg-[#0B0B0C] py-14">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-2 md:items-center">
        <div>
          <p className="text-xs font-black uppercase tracking-widest text-[#D4AF37]">
            {d.location.kicker}
          </p>
          <h2 className="section-title mt-2 text-white">{d.location.title}</h2>
          <p className="body-text mt-2 text-white/60">{d.location.sub}</p>
          <p className="mt-4 flex items-center gap-2 text-sm font-bold text-white">
            <IconMapPin className="h-5 w-5 text-[#D4AF37]" />
            {d.location.address}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#D4AF37] px-7 py-3 text-xs font-extrabold tracking-widest text-black transition-all hover:opacity-90 active:scale-95">
              {d.location.directions}
            </a>
            <span className="text-xs font-bold text-white/60">{t("footer.followUs")}</span>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-white transition-all hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-black">
              <IconInstagram className="h-5 w-5" />
            </a>
            <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-white transition-all hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-black">
              <IconFacebook className="h-5 w-5" />
            </a>
          </div>
        </div>
        <div className="overflow-hidden rounded-2xl border border-[#D4AF37]/30">
          <iframe
            title="Protein Paradise map"
            src="https://maps.google.com/maps?q=35.3079294,-1.1349514&z=17&output=embed"
            className="h-72 w-full border-0 md:h-80"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
