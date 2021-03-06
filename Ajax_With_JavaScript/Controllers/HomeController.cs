﻿using Ajax_With_JavaScript.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Ajax_With_JavaScript.Controllers
{
    public class HomeController : Controller
    {
        //GET request
        public ActionResult Index(){
            return View();
        }

        public PartialViewResult AjaxJS(string vote) {
            return PartialView();
        }

        //POST request
        public ActionResult GetFormDataAjaxJS() {
            return View(new Accept());
        }

        [HttpPost]
        public ActionResult GetFormDataAjaxJS(Accept accept) {
            ViewBag.Name = accept.Login;
            if (ModelState.IsValid)
                return View("AjaxPostJS");
            else
                return View();
        }

        //JSON
        public ActionResult GetJSON() {
            return View();
        }

        public JsonResult GetAjaxJson() {
            Dictionary<string, string> data = new Dictionary<string, string>() {
                { "RU", "2390"},
                {"CN","500"},
                {"TR","2000"}
            };
            return Json(data, JsonRequestBehavior.AllowGet);
            //return Json(null, JsonRequestBehavior.AllowGet); //fail
        }

        //$.ajax thin managing by requests
        public ActionResult JqAjax(int numberPartialView=1) {
            return View(numberPartialView);
        }

        public object JqAjax1() {
            if (Request.Headers["X-Requested-With"] == null) {
                return RedirectToAction("JqAjax", new { numberPartialView=1});
            }
            return PartialView("JqAjax1");
        }

        public object JqAjax2() {
            if (Request.Headers["X-Requested-With"] == null){
                return RedirectToAction("JqAjax", new { numberPartialView = 2 });
            }
            return PartialView("JqAjax2");
        }

        public object JqAjax3() {
            if (Request.Headers["X-Requested-With"] == null) {
                return RedirectToAction("JqAjax", new { numberPartialView = 3 });
            }
            return PartialView("JqAjax3");
        }
    }
}