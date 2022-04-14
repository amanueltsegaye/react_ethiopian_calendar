export class EthiopianDateUtil {
    static getMonths() {
        return ["መስከረም", "ጥቅምት", "ኅዳር", "ታኅሣሥ", "ጥር", "የካቲት", "መጋቢት", "ሚያዝያ", "ግንቦት", "ሰኔ", "ሐምሌ", "ነሐሴ", "ጳጉሜ"];
    }   
    static ethToGreg(ethdate:any) {
        if (!ethdate) return null;
        var dmy = ethdate.split("/");
        if (dmy.length == 3) {
            var appdate = ($ as any).calendars.instance('ethiopian').newDate(parseInt(dmy[2], 10), parseInt(dmy[1], 10), parseInt(dmy[0], 10));
            var jd = ($ as any).calendars.instance('ethiopian').toJD(appdate);
            var appdategc = ($ as any).calendars.instance('gregorian').fromJD(jd);
            var appdategcstr = ($ as any).calendars.instance('gregorian').formatDate('mm/dd/yyyy', appdategc);

            return appdategcstr;
        }
        else return null;
    }

    static gregToEth(gregdate:any) {
        if (!gregdate) return null;
        var dmy;
        dmy = gregdate.split("-");// first try the - separator
        if (dmy.length != 3) dmy = gregdate.split("/");// then try the / separator
        if (dmy.length == 3) {
            var appdate = ($ as any).calendars.instance('gregorian').newDate(parseInt(dmy[2], 10), parseInt(dmy[0], 10), parseInt(dmy[1], 10));
            var jd = ($ as any).calendars.instance('gregorian').toJD(appdate);
            var appdateet = ($ as any).calendars.instance('ethiopian').fromJD(jd);
            var appdateetstr = ($ as any).calendars.instance('ethiopian').formatDate('dd/mm/yyyy', appdateet);

            return appdateetstr;
        }
        else return null;
    }

}
