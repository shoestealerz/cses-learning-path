import sys
import io
import heapq 
INF = float("inf")
MOD = 10**9 + 7
from collections import defaultdict
 
# sys.stdin = io.StringIO("""\
# 3 7
# 3 2 5
# """)
 
input = sys.stdin.readline
 
def solve():
    n=list(map(int,input().split()))
    a=list(map(int,input().split()))
 
    products=n[1]
 
    curr=0
    a.sort()
    time=0
 
    def check(t):
        res=0
        for m in a:
            res+=t//m
        if res>=products:
            return True
        return False
 
    right=a[0]*products
    left=0
 
    while left<right:
        mid=(left+right)//2
        if check(mid):
            right=mid
        else:
            left=mid+1
 
    print(left)
    
 
                
            
            
 
 
 
 
 
 
 
 
    
 
 
 
def main():
    # t = int(input())
 
    # for _ in range(t):
    #     solve()
 
    solve()
 
 
main()
