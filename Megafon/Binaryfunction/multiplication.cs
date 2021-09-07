using System;
using System.Collections.Generic;
using System.Text;

namespace Binaryfunction
{
    class multiplication
    {
        public string res;
        public void multBite(int  bit1,int  bit2)
        {
            int resmul = bit1 * bit2;
            res = Convert.ToString(resmul, 2);
        }
    }
}
