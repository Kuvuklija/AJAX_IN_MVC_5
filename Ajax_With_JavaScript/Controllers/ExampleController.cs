using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Ajax_With_JavaScript.Controllers{

    public class ExampleController : Controller {

        public bool? term { get; set; }

        public object Load1(int load) {
            return Wrapper(load);
        }

        public object Load2(int load) {
            return Wrapper(load);
        }

        public object Load3(int load) {
            return Wrapper(load);
        }

        public object Load4(int load) {
            return Wrapper(load);
        }

        public ViewResult MainPage(int load=4) {
            return View(load);
        }

        //for unit test
        public object Wrapper(int load) {
            bool isAjax;
            if (term == null)
                isAjax = Request.Headers["X-Requested-With"] != null; //non-testing
            else
                isAjax = (bool)term;

            return Term(load, isAjax);
        }

        public object Term(int load, bool isAjax) { 
            if (isAjax) 
                    return PartialView();
             else
                    return RedirectToAction("MainPage", new { load});
        }

        public string MethodCa() {
            return "it is Method CA";
        }

        public string MethodTx() {
            return "it is Method TX";
        }

        public string MethodNy() {
            return "it is Method NY";
        }

        public JsonResult EventList() {
            var json = System.IO.File.ReadAllText(Server.MapPath("~/Content/ArrangementList.json"), System.Text.Encoding.Default); //see about encoding
            return Json(json, JsonRequestBehavior.AllowGet);
        }

        public PartialViewResult Description() {
            return PartialView();
        }
    }
}