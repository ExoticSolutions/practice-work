import java.util.ArrayList;

public class MyTest{
  public static void main(String[] args){

    ArrayList<Integer> ArrayOne = new ArrayList<Integer>();

    
    Integer i;

    for (i = 0; i < 10; ++i){
      ArrayOne.add(i, i);
    }

    System.out.println(ArrayOne);
    int[] myArray = {1, 2, 3, 4};

    printArray(myArray);
    
  }

  public static void printArray(int[] target){
    int i;

    for (i = 0; i < target.length; ++i){
      System.out.println(target[i]);
    }
  }
}