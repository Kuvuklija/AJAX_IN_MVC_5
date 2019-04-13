using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Ajax_With_JavaScript.Controllers;
using System.Web.Mvc;

namespace Ajax_With_JavaScript.UnitTests
{
    [TestClass]
    public class UnitTest1
    {
        [TestMethod]
        public void Pass_From_The_Load_To_Redirect_Without_Ajax() {
            //arrange
            int load = 1;
            ExampleController target = new ExampleController();
            target.term = false;
            //action 
            RedirectToRouteResult result = (RedirectToRouteResult)target.Load1(load);
            //assert
            Assert.AreEqual(result.RouteValues["action"], "MainPage");
            Assert.AreEqual(result.RouteValues["load"], 1);
        }
        
        [TestMethod]
        public void Can_View_Main_Page_Context() {
            //arrange
            ExampleController target = new ExampleController();

            //action
            int result = (int)target.MainPage().ViewData.Model;

            //assert
            Assert.AreEqual(result, 4);
        }

        [TestMethod]
        public void Can_Partial_View_With_Ajax() {

        }
    }
}
