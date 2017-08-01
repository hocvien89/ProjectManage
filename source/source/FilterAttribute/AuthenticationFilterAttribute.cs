using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Principal;
using System.Text;
using System.Web;
using System.Web.Mvc;

namespace source.FilterAttribute
{
    public class AuthenticationFilterAttribute : ActionFilterAttribute
    {
        public override void OnActionExecuting(ActionExecutingContext filterContext)
        {
            if (filterContext == null)
            {
                throw new ArgumentNullException("filterContext");
            }
            string authHeader = filterContext.HttpContext.Request.Headers["Authorization"];
            if (!String.IsNullOrEmpty(authHeader) && authHeader.StartsWith("Basic"))
            {
                byte[] encodedDataAsBytes = Convert.FromBase64String(authHeader.Replace("Basic ", ""));
                string value = Encoding.ASCII.GetString(encodedDataAsBytes);
                if (value != "sakenomy:Sakenomy2017")
                {
                    ReturnAuthenticateFailed(filterContext);
                }
            }
            else
            {
                ReturnAuthenticateFailed(filterContext);
            }
            base.OnActionExecuting(filterContext);
        }
       
        private void ReturnAuthenticateFailed(ActionExecutingContext filterContext)
        {
            filterContext.HttpContext.Response.Clear();
            filterContext.HttpContext.Response.Clear();
            filterContext.HttpContext.Response.StatusDescription = "Unauthorized";
            filterContext.HttpContext.Response.AddHeader("WWW-Authenticate", "Basic realm=\"Secure Area\"");
            filterContext.HttpContext.Response.Write("401, please authenticate");
            filterContext.HttpContext.Response.StatusCode = 401;
            filterContext.Result = new EmptyResult();
            filterContext.HttpContext.Response.End();
        }
    }
}