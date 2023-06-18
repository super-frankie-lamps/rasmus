import { AText, Box } from "@components/uikit"

const Anpartsselskab = () => {
  return (
	<Box direction="column">
		<AText font="semiBold" size="xl">Skal du til at stifte et aktieselskab (A/S) bør du bl.a. have styr på, hvad der er af krav til indskud.
	Se, hvordan du opretter et aktieselskab, og hvor meget det koster.</AText>
		<Box top="xl">
		<Box direction="column">
				<AText font="medium" size="l">Væsentligste kendetegn ved A/S</AText>
			<AText>Én eller flere ejere, som er den eller de personer eller virksomheder, der ejer aktierne i virksomheden.
	Selvstændig juridisk enhed, hvor ejerne kun hæfter for deres indskudte kapital.
	Et A/S skal indskyde en startkapital på mindst 400.000 kr.
	Et A/S skal føre regnskab og indberette sin årsrapport digitalt.
	Ifølge selskabsloven skal et A/S bl.a. føre ejerbog over samtlige ejere og panthavere samt registrere legale og reelle ejerforhold.
	Ledelsen i et A/S skal bestå af en direktion og en bestyrelse eller et tilsynsråd.
	Det koster 670 kr. at registrere et A/S.</AText>
			<AText font="medium" size="l">Stiftelse og registrering af A/S</AText>
			<AText>Du stifter et A/S ved at oprette og underskrive et stiftelsesdokument og vedtage selskabets vedtægter.
	Registreringen af stiftelsen skal ske i Erhvervsstyrelsens IT-system inden 2 uger efter underskrivelsen af stiftelsesdokumentet. Ellers kan registrering ikke finde sted.
			</AText>
			<AText font="medium" size="l">Indskud</AText>
			<AText>Kapitalindskuddet i et A/S kan ske i form af kontanter eller andre værdier end kontanter – såkaldt apportindskud.
	En enkeltmandsvirksomhed kan eksempelvis indskydes som apportindskud ved stiftelsen af et A/S.
			</AText>
			<AText font="medium" size="l">Krav til stiftere</AText>
			<AText>Stifteren er den eller de personer, der skriver under på stiftelsesdokumentet. ​Stiftere af et A/S har ikke pligt til at indskyde kapital og kan enten være fysiske eller juridiske personer. Desuden må stiftere af et selskab ikke være under konkurs og rekonstruktion.
	Fysiske personer skal være myndige og må ikke være under værgemål på stiftelsestidspunktet.
	Juridiske personer er for eksempel interessentskaber, selskaber (ApS, A/S, P/S), foreninger eller erhvervsdrivende fonde. Hvis du i forvejen ejer en enkeltmandsvirksomhed, kan du som fysisk person godt stifte et A/S, men selve enkeltmandsvirksomheden kan ikke være stifter.
	Juridiske personer må som stiftere heller ikke være under stiftelse eller tvangsopløsning.
	Juridiske personer kan som stiftere godt være et selskab under likvidation, den danske stat eller en kommune.
	Stiftelse af et A/S kræver, at du skal udfærdige vedtægter og et stiftelsesdokument. Derudover skal du have en oversigt over alle ejere i en ejerbog.
			</AText>
		</Box>
		</Box>
	</Box>
  )
}

export default Anpartsselskab