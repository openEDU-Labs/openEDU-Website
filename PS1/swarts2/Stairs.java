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
Question 3
Given an integer input N, print a staircase out of height N. For example, given the input 4, print out the following staircase:
    #
   ##
  ###
 ####
#####
PLEASE LOOK AT PS1.txt FOR MORE DETAILS!!!
************************************************
*/
public class Stairs {


	public static void stairs(int input) {
		
		for(int i = 0; i< input+1; i++)
		{
			for(int j=0; j< (input-i); j++)
			{
				System.out.print(" ");
				
			}
			for(int k=0; k<(1+i); k++)
			{
				System.out.print("#");
			}
			System.out.println();
		}
		System.out.println();
		return;
		
	}


	public static void main(String[] args) {
		File file = new File("Stairs.txt");
		//File file  = new File("/Users/CharlesBSwarts/Documents/workspace/JAVA/Homework 3 Folder/src/Stairs.txt");
		try {
			Scanner scan = new Scanner(file);
			int numberOfCases = scan.nextInt();
			for(int i = 0; i < numberOfCases; i++) {
				int height = scan.nextInt();
				stairs(height);
			
			}
			scan.close();
		}
		catch (FileNotFoundException e) {
			e.printStackTrace();
		}
		
	}

}