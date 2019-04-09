using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Ajax_With_JavaScript.Models{

    public class Accept{
        
        public string Login { get; set; }
        public string Password { get; set; }

        [RegularExpression(".+\\@.+\\..+", ErrorMessage="Please enter a valid address")]
        public string Email { get; set; }
    }
}