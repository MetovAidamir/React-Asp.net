using System;
using System.Collections.Generic;
using System.Text;

namespace Binaryfunction
{
   public class Sum
    {
        public string res = "";
        public void SumBit(string bite1,string bite2)
        {
            string res = "";
            char interBit = '0';
           for (int i=bite1.Length-1 ;i>=0; i--)
           {
                if (bite1[i] == '1' && bite2[i] == '1')
                {
                    if (interBit == '1')
                    {
                        res = '1' + res;
                    }
                    else
                    {
                        res = '0' + res;
                        interBit = '1';
                    }
                }
                else
                if (bite1[i] == '1' && bite2[i] == '0' || bite1[i] == '0' && bite2[i] == '1')
                {
                    if (interBit == '1')
                    {
                        res = '0' + res;
                    }
                    else
                    {
                        res = '1' + res;
                    }
                }
                else
                {
                    if (interBit=='1')
                    {
                        res = '1' + res;
                        interBit = '0';
                    }
                    else
                    res = '0' + res;
                }
           }
        }
    }
}
