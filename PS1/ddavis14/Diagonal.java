import java.util.*;
import java.io.*;

/*
************************************************
  ____ ____    _  ___   __   
 / ___/ ___|  / |/ _ \ / /_  
| |   \___ \  | | (_) | '_ \ 
| |___ ___) | | |\__, | (_) |
 \____|____/  |_|  /_/ \___/ 
                             

Problem set 1


Question 2

Given a square matrix size N x N, calculate the product of the sums across the two main diagonals.
For example, given the input:

3

4	5	7
3	1	5
9	3	2

Return: (4+1+2)*(9+1+7) = 119

PLEASE LOOK AT PS1.txt FOR MORE DETAILS!!!

************************************************

*/
public class Diagonal {

	public static int diagonal(int[][] input)
    {
        int x = 0;
        for(int r = 0; r < input.length; r++)
        {
            for (int c = 0; c < input[r].length; c++)
            {
                if(r == c)
                {
                    x += input[r][c];
                }
                
            }
        
        }
        int y= 0;
        for(int r = 0; r < input.length; r++)
        {
            for (int c = input[r].length - 1; c >= 0; c--)
            {
                if(r + c == input.length - 1)
                {
                    y += input[r][c];
                }
                
            }
        }
		return x*y;
	}





	public static void main(String[] args) {
		File file = new File("Diagonal.txt");
		try {
			Scanner scan = new Scanner(file);
			int numberOfCases = scan.nextInt();
			for(int i = 0; i < numberOfCases; i++) {
				int N = scan.nextInt();
				int[][] matrix = new int[N][N];
				for(int j = 0; j < N; j++) {
					for(int k = 0; k < N; k++) {
						matrix[j][k] = scan.nextInt();
					}
				}
				System.out.println(diagonal(matrix));
			}
			scan.close();
		}
		catch (FileNotFoundException e) {
			e.printStackTrace();
		}
	}

}