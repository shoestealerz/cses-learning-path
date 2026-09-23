import sys
import io
import heapq 
INF = float("inf")
MOD = 10**9 + 7
from collections import defaultdict
 
# sys.stdin = io.StringIO("""\
# 2
# 1
# """)
 
input = sys.stdin.readline
 
def solve():
    n=int(input())
    a=list(map(int,input().split()))
    a.sort()
    for i in range(len(a)):
        val=a[i]
        if val!=i+1:
            print(i+1)
            return
    print(len(a)+1)
 
 
 
def main():
    # t = int(input())
 
    # for _ in range(t):
    #     solve()
 
    solve()
main()
