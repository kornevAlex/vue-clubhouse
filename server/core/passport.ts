import { createJwtToken } from './../utils/createJWTtoken';
import passport from "passport";
import {Strategy as VKStrategy, StrategyOptions} from "passport-vkontakte";
import {Strategy as JwtStrategy, ExtractJwt} from "passport-jwt";
import { User } from '../../models';
import { UserData } from '../../types/types';

declare var process : {
    env: {
        VKONTAKTE_APP_ID: string,
        VKONTAKTE_APP_SECRET: string,
        SMS_API_KEY: string,
        SECRET_KEY_JWT: string
    }
  }

const opts = {
    jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRET_KEY_JWT
}

passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    done(null, jwt_payload.data)
}));

passport.use('vkontakte', new VKStrategy({
    clientID: process.env.VKONTAKTE_APP_ID, // VK.com docs call it 'API ID', 'app_id', 'api_id', 'client_id' or 'apiId'
    clientSecret: process.env.VKONTAKTE_APP_SECRET,
    callbackURL: "http://localhost:3001/auth/vkontakte/callback",
}, async function myVerifyCallbackFn(
    accessToken,
    refreshToken,
    params,
    profile,
    done
) {
    try {
        let userData: UserData;
        console.log(profile);
        
        const obj = {
            fullName: profile.displayName,
            avatarUrl: profile.photos?.[0].value,
            isActive: 0,
            username: profile.username,
            phone: '',
        };
        const findUser = await User.findOne({
            where: {
                username: obj.username
            }
        });
        
        if(!findUser) {
            const profiles = await User.create(obj)
            userData = profiles.toJSON();

        } else {
            userData = findUser.toJSON();
        }
        
        done(null, {
            ...userData,
            token: createJwtToken(userData)
        })
        
    } catch (error) {
        done(error)
    }
}
));
passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
  
  
  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err:any,user:any){
      err 
        ? done(err)
        : done(null,user);
    });
  });

export { passport }