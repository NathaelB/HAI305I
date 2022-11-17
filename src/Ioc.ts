import Service from "./Service";

type Services = Map<string, any>

/**
 * @rubyjs/ioc
 * (c) Bonnal Nathael <pro.nathaelbonnal@gmail.com>
 *
 * Inversion Of Control (IoC) représente de l'injection de dépendance.
 * Qui nous permet de récupérer la même instance dans l'ensemble de notre
 * application web.
 */
class Ioc {
  private _services: Services = new Map()
  private static $instance: Ioc

  constructor() {
    Ioc.$instance &&= this;
  }

  public get services (): Services {
    return this._services
  }

  public bind<T extends Service> (callback: (ioc: Ioc) => Service): T {
    const service = callback(this)
    this._services.set(service.constructor.name, service)

    return service as T;
  }

  public use<T extends Service> (service: { new (...params): T }): T {
    return this._services.get(service.name)
  }
}

const ioc = new Ioc()
export default ioc;
