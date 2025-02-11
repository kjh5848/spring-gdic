package co.kr.nomadlab.springgdic.util;

public class Script {
    public static String back(String msg) {
        StringBuffer sb = new StringBuffer();
        sb.append("<script>");
        sb.append("alert('").append(msg).append("');");
        sb.append("history.back();");
        sb.append("</script>");
        return sb.toString();
    }

    public static String redirectTo(String url) {
        StringBuffer sb = new StringBuffer();
        sb.append("<script>");
        sb.append("window.location.href = '").append(url).append("';");
        sb.append("</script>");
        return sb.toString();
    }
}