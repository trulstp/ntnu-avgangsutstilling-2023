import Link from "next/link";
import Image from "next/image";


function StudyprogramInfo({ studydirection, imagestyle, imagelocation, imagealt, size, pheadstyle, studyprogram, studyprogramtext, studyprogramtext2, studybuttonstyle, page }) {
    return (
        <div className={studydirection}>
            <Image
                className={imagestyle}
                src={imagelocation}
                alt={imagealt}
                width={size}
                height={size}
            />
            <div className="md:w-2/5">
                <p className={pheadstyle}>
                    {studyprogram}
                </p>
                <p className="text-[20px]">{studyprogramtext}</p>
                <p className="mt-5 text-[20px]">{studyprogramtext2}</p>
                <button className={studybuttonstyle}><Link href={page}><p className="text-[20px]">Se studentene</p></Link></button>
            </div>


        </div>
    );
}

export default function HomeContent() {
    return (
        <div>
            <StudyprogramInfo
                studydirection={"flex sm:flex-col md:flex-row md:justify-around sm:my-32 md:my-52"}
                imagestyle={"sm:mx-auto sm:my-20"}
                imagelocation={"/Interaksjonsdesign_hovedside.svg"}
                imagealt={"Interaksjonsdesign square of icons"}
                size={300}
                pheadstyle={"text-[40px] text-[#72ad56] font-extrabold"}
                studyprogram={'Interaksjonsdesign'}
                studyprogramtext={'28 studenter fra Bachelor i interaksjonsdesign ved NTNU i Gjøvik avslutter tre års studier med en utstilling. Studentene har også laget en egen digital portefølje for å introdusere seg selv og reflektere over læringsutbyttet i ulike emner og prosjekter.'}
                studyprogramtext2={'Utstillingen inkluderer designarbeider for elektroniske medier, så vel som fysiske prototyper, og viser eksempler på hva studentene har jobbet med i emner som tjenestedesign, informasjonsarkitektur, tingenes web, forretningsdesign, og fysisk prototyping.'}
                studybuttonstyle={"border-2 border-[#72ad56] rounded my-5 py-2 px-8"}
                page={"/bixd"}
            />

            <StudyprogramInfo
                studydirection={"flex sm:flex-col md:flex-row-reverse md:justify-around sm:my-32 my-52"}
                imagestyle={"sm:mx-auto sm:my-20"}
                imagelocation={"/GrafiskDesign_hovedside.svg"}
                imagealt={"Grafisk design square of icons"}
                size={300}
                pheadstyle={"text-[40px] text-[#d15b96] font-extrabold"}
                studyprogram={'Grafisk Design'}
                studyprogramtext={'27 studenter fra Bachelor i grafisk design ved NTNU i Gjøvik avslutter tre års studier med en utstilling. Hver student viser ti utvalgte designarbeider fra egen mappe.'}
                studyprogramtext2={'Utstillingen inkluderer designarbeider for papirbaserte og elektroniske medier, samt skilt og veifinningssystemer. For eks­empel innen bedriftsprofilering, løsninger for web, mobil og nettbrett, bokdesign, tidsskriftdesign, avisdesign, kalligrafi og skriftdesign.'}
                studybuttonstyle={"border-2 border-[#d15b96] rounded my-5 py-2 px-8"}
                page={"/bmed"}
            />

            <StudyprogramInfo
                studydirection={"flex sm:flex-col md:flex-row md:justify-around sm:my-32 my-52"}
                imagestyle={"sm:mx-auto sm:my-20"}
                imagelocation={"/Webutvikling_hovedside.svg"}
                imagealt={"Webutvikling square of icons"}
                size={300}
                pheadstyle={"text-[40px] text-[#5a92ce] font-extrabold"}
                studyprogram={'Webutvikling'}
                studyprogramtext={'18 studenter fra Bachelor i Webutvikling ved NTNU i Gjøvik avslutter tre års studier med en utstilling. Hver student viser et sammendrag av sine prosjekter her. Studentene har også laget en personlig nettportefølje for å introdusere seg selv og reflektere over læringsutbyttet i ulike emner og prosjekter.'}
                studyprogramtext2={'Studentene kombinerer brukersentrerte designmetoder og web-teknologier for å løse problemer. Utstillingen inkluderer en rekke ulike arbeider fra idéskaping, konseptualisering og prototyping til utvikling og implementering.'}
                studybuttonstyle={"border-2 border-[#5a92ce] rounded my-5 py-2 px-8"}
                page={"/bwu"}
            />
        </div>
    );

}