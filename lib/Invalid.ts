///<reference path='refs.ts'/>
module TDev.RT {
    //? Create invalid values
    //@ skill(3)
    export module Invalid
    {

        //? Creates an invalid Number instance
        export function number() : number { return undefined; }

        //? Creates an invalid Boolean instance
        export function boolean() : boolean { return undefined; }

        //? Creates an invalid String instance
        export function string() : string { return undefined; }

        //? Creates an invalid String Collection instance
        export function string_collection() : Collection<string> { return undefined; }

        //? Creates an invalid DateTime instance
        export function datetime() : DateTime { return undefined; }

        //? Creates an invalid Color instance
        export function color() : Color { return undefined; }

        //? Creates an invalid Song instance
        export function song(): Song { return undefined; }
        
        //? Creates an invalid Location instance
        export function location() : Location_ { return undefined; }

        //? Creates an invalid Location Collection instance
        export function location_collection() : Collection<Location_> { return undefined; }

        //? Creates an invalid Map instance
        //@ cap(maps)
        export function map() : Map { return undefined; }

        //? Creates an invalid Sound instance
        export function sound() : Sound { return undefined; }

        //? Creates an invalid Json Object instance
        export function json_object() : JsonObject { return undefined; }

        //? Creates an invalid Link instance
        export function link() : Link { return undefined; }

        //? Creates an invalid Link Collection instance
        export function link_collection() : Collection<Link> { return undefined; }

        //? Creates an invalid Vector3 instance
        export function vector3() : Vector3 { return undefined; }

        //? Creates an invalid Number Map instance
        export function number_map() : NumberMap { return undefined; }

        //? Creates an invalid String Map instance
        export function string_map() : StringMap { return undefined; }

        //? Creates an invalid Message instance
        export function message() : Message { return undefined; }

        //? Creates an invalid Message Collection instance
        export function message_collection() : Collection<Message> { return undefined; }

        //? Creates an invalid Board instance
        export function board() : Board { return undefined; }

        //? Creates an invalid Sprite instance
        export function sprite(): Sprite { return undefined; }

        //? Creates an invalid Sprite Animation instance
        export function sprite_animation(): SpriteAnimation { return undefined; }

        //? Creates an invalid Sprite Set instance
        export function sprite_set() : SpriteSet { return undefined; }

        //? Creates an invalid Xml Object instance
        export function xml_object() : XmlObject { return undefined; }

        //? Creates an invalid Place instance
        export function place(): Place { return undefined; }
        
        //? Creates an invalid TextBox instance
        export function textbox() : TextBox { return undefined; }

        //? Creates an invalid Contact instance
        export function contact() : Contact { return undefined; }

        //? Creates an invalid Contact Collection instance
        export function contact_collection() : Collection<Contact> { return undefined; }

        //? Creates an invalid Camera instance
        export function camera() : Camera { return undefined; }

        //? Creates an invalid Web Request instance
        export function web_request() : WebRequest { return undefined; }

        //? Creates an invalid Web Response instance
        export function web_response() : WebResponse { return undefined; }

        //? Creates an invalid Number Collection instance
        export function number_collection() : Collection<number> { return undefined; }

        //? Creates an invalid Page instance
        export function page() : Page { return undefined; }

        //? Creates an invalid Page Button instance
        export function page_button() : PageButton { return undefined; }

        //? Creates an invalid Page Collection instance
        export function page_collection() : Collection<Page> { return undefined; }
        export function box_flow(): BoxFlow { return undefined; }

        //? Creates an invalid Matrix instance
        export function matrix() : Matrix { return undefined; }

        //? Creates an invalid Action instance
        export function action() : Action { return undefined; }

        //? Creates an invalid Text Action instance
        export function text_action() : Action { return undefined; }

        //? Creates an invalid Position Action instance
        export function position_action() : Action { return undefined; }

        //? Creates an invalid Vector Action instance
        export function vector_action() : Action { return undefined; }

        //? Creates an invalid WebResponse Action instance
        export function webresponse_action(): Action { return undefined; }

        //? Creates an invalid Sprite Action instance
        export function sprite_action(): Action { return undefined; }

        //? Creates an invalid Sprite Set Action instance
        export function sprite_set_action(): Action { return undefined; }

        //? Creates an invalid Json Builder instance
        export function json_builder(): JsonBuilder { return undefined; }

        //? Creates an invalid Message Collection Action instance
        export function message_collection_action(): Action { return undefined; }

        //? Creates an invalid OAuth Response instance
        export function oauth_response(): OAuthResponse { return undefined; }

        //? Creates an invalid Form Builder instance
        export function form_builder(): FormBuilder { return undefined; }

        //? Creates an invalid User instance
        export function user(): User { return undefined; }

        //? Creates an invalid Gamepad instance
        export function gamepad(): Gamepad_ { return undefined; }
    }
}
