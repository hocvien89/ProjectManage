using System;
using System.Collections;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Linq;
using System.Resources;
using System.Threading;
using System.Web;

namespace source.Localization
{
    public class Resources
    {
        string _lang;
        public Resources(HttpCookieCollection cookie)
        {
            _lang = Thread.CurrentThread.CurrentUICulture.Name;
            if (cookie["language"] != null) _lang = cookie["language"].Value;
        }

        public void SetLang(string lang)
        {
            _lang = lang;
        }

        public string GetLang()
        {
            return _lang;
        }

        public NameValueCollection GetResource()
        {
            var path = HttpContext.Current.Server.MapPath("/Localization/");
            string resourceFileName =
                _lang.StartsWith("en") ? "Resources.en.resx" :
                                         "Resources.resx";
            var ret = new NameValueCollection();
            using (var reader = new ResXResourceReader(path + resourceFileName))
            {
                foreach (DictionaryEntry entry in reader)
                {
                    ret.Add(entry.Key.ToString(), entry.Value.ToString());
                }
            }
            return ret;
        }
    }
}