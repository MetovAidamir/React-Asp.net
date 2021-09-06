using System;

namespace Binaryfunction
{
    public class ConvertToByte
    {
       public string bite;
        public void convert(int intput)
        {
           if (intput>0)
           {
                bite = Convert.ToString(intput, 2);
                bite = bite.PadLeft(8,'0');   
           }
           else
           {
           intput *= -1;
            var invNumb = (byte)~intput;
                bite = Convert.ToString(invNumb, 2);
            Sum sum = new Sum();
            sum.SumBit(bite, "00000001");
                bite = sum.res;
           }
        }
    }
}
