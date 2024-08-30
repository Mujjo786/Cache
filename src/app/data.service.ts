import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CacheService } from './cache.service';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient,private cacheService:CacheService) { }

getData(url:string):Observable<any>{
  const cachedResponse = this.cacheService.get(url);
  
  if(cachedResponse){
    return cachedResponse
  }else{
    return this.http.get(url).pipe(
      tap(response=> this.cacheService.set(url,response))
    )
  }
}
}

