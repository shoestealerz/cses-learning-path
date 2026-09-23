import sys
import io
import heapq 
INF = float("inf")
MOD = 10**9 + 7
from collections import defaultdict
 
# sys.stdin = io.StringIO("""\
# 3
# """)
 
# input = sys.stdin.readline
 
def solve():
    n=int(input())
    output=[]
    output.append(str(n))
    while n!=1:
        if n%2==0:
            n=n/2
        else:
            n=3*n+1
        output.append(str(int(n)))
    print(' '.join(output))
 
 
def main():
    # t = int(input())
 
    # for _ in range(t):
    #     solve()
 
    solve()
main()
